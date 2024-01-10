module.exports = {
  productsCount: {
    task: async ({ strapi }) => {
      console.log("hwj");
      try {
        console.log("work after 14min" + new Date());
      } catch (err) {
        console.error(err);
      }
    },
    options: {
      // Every minute
      rule: "/14 * * * *",
    },
  },
};
