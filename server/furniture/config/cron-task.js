module.exports = {
  productsCount: {
    task: async ({ strapi }) => {
      try {
        console.log("work after 14min" + new Date());
        console.log("hwj");
      } catch (err) {
        console.error(err);
      }
    },
    options: {
      // Every 14min
      rule: "'0/1 * * * * *",
    },
  },
};
