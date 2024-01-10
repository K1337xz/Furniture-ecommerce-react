module.exports = {
  productsCount: {
    task: async ({ strapi }) => {
      console.log("cd" + new Date());
      try {
      } catch (err) {
        console.error(err);
      }
    },
    options: {
      // Every minute
      rule: "/10 * * * * *",
    },
  },
};
