module.exports = {
  index: async (ctx) => {
    await strapi.plugins["email"].services.email.send({
      to: "koporson1337@gmail.com",
      from: "koporson1337@gmail.com",
      subject: "Hello",
      text: "Testing some Mailgun awesomeness!",
      html: "<h1>Testing some Mailgun awesomeness!</h1>",
    });
    ctx.send("Email send???");
  },
};
