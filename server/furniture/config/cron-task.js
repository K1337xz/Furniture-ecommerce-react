module.exports = {
  productsCount: {
    task: async ({ strapi }) => {
      console.log("cd" + new Date());
      try {
        console.log("cd" + new Date());
      } catch (err) {
        console.error(err);
      }
    },
    options: {
      // Every minute
      rule: "0/10 * * * * *",
    },
  },
};
