module.exports = {
  productsCount: {
    task: async ({ strapi }) => {
      console.log("?????");
      try {
        const products = await strapi.query("api::product.product").findMany();
        const productsCount = products.length;
        console.log(productsCount);
      } catch (err) {
        console.error(err);
      }
    },
    options: {
      // Every 14min
      rule: "*/1 * * * *",
    },
  },
};
