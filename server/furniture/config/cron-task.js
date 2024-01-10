module.exports = {
  productsCount: {
    task: async ({ strapi }) => {
      try {
        await strapi.stop();
        console.log("strapi server stopped");

        console.log("strapi server restarted!");
        await strapi.strapi();
      } catch (err) {
        console.error(err);
      }
    },
    options: {
      // Every minute
      rule: "*/3 * * * *",
    },
  },
};
