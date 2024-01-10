module.exports = {
  productsCount: {
    task: async ({ strapi }) => {
      console.log("huh");
      try {
        await strapi.stop();
        console.log("strapi server stopped");

        const strapiServer = await strapi.strapi();
        console.log("strapi server restarted!");
        return strapiServer;
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
