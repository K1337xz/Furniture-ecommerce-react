"use strict";

const order = require("../services/order");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { products, userName, email, total } = ctx.request.body;
    try {
      const lineItems = await Promise.all(
        products.map(async (product) => {
          const item = await strapi
            .service("api::product.product")
            .findOne(product.id);
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.Name,
              },
              unit_amount: item.price * 100,
            },
            quantity: product.amount,
          };
        })
      );

      const session = await stripe.checkout.sessions.create({
        customer_email: email,
        payment_method_types: ["card"],
        mode: "payment",
        success_url:
          "https://furniture-ecommerce-react-gray.vercel.app/checkout/?success=true",
        cancel_url:
          "https://furniture-ecommerce-react-gray.vercel.app/checkout/?success=false",
        line_items: lineItems,
      });
      const createdOrder = await strapi.service("api::order.order").create({
        data: {
          userName,
          products,
          stripeSessionId: session.id,
          orderStatus: "Awaiting Fulfillment",
          total: total,
        },
      });

      return { createdOrder };
    } catch (error) {
      ctx.response.status = 500;
      return { error };
    }
  },
}));
