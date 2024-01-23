module.exports = {
  productsCount: {
    task: async ({ strapi }) => {
      console.log("xd");
      try {
        await strapi.stop();
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
