module.exports = {
  productsCount: {
    task: async ({ strapi }) => {
      console.log("cd");
      try {
      } catch (err) {
        console.error(err);
      }
    },
    options: {
      // Every minute
      rule: "*/14 * * * *",
    },
  },
};
