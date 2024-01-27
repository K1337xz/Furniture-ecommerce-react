module.exports = {
  productsCount: {
    task: async ({ strapi }) => {
      try {
        await strapi.stop();
        console.log("xddddd");
        await strapi.start();
      } catch (err) {
        console.error(err);
      }
    },
    options: {
      // Every 11min
      rule: "*/10 * * * *",
    },
  },
};
