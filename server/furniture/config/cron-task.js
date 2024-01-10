module.exports = {
  productsCount: {
    task: async ({ strapi }) => {
      console.log("hwj");
      try {
        console.log("work after 14min" + new Date());
        console.log("huh");
        console.log("x");
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
