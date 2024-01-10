module.exports = {
  productsCount: {
    task: async ({ strapi }) => {
      try {
        console.log("strapi server restarted!");
      } catch (err) {
        console.error(err);
      }
    },
    options: {
      // Every minute
      rule: "*/1 * * * *",
    },
  },
};
