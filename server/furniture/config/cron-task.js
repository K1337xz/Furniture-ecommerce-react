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
      // Every 14min
      rule: "*/14 * * * *",
    },
  },
};
