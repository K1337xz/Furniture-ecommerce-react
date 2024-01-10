module.exports = {
  productsCount: {
    task: async ({ strapi }) => {
      console.log("hwj");
      try {
        console.log("work after 14min" + new Date());
        console.log("huh");
      } catch (err) {
        console.error(err);
      }
    },
    options: {
      // Every minute
      rule: "/1 * * * *",
    },
  },
};
