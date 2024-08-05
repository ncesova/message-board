const {Router} = require("express");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam est nibh, mollis vel dui quis, ullamcorper dignissim magna. Quisque faucibus.",
    user: "Troll",
    added: new Date(),
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis nec massa vitae mollis. Aliquam nec massa ac elit condimentum sodales eu quis mauris. Vivamus sodales pellentesque lectus ac luctus. In hac habitasse platea dictumst. In metus felis, aliquam ac mollis non, imperdiet id metus. Proin ligula lectus, congue id.",
    user: "exmaple",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", {messages: messages});
});

indexRouter.get("/new", (req, res) => {
  res.render("newMessage", {});
});

indexRouter.post("/new", (req, res) => {
  const messageName = req.body.name;
  const messageText = req.body.message;
  messages.push({text: messageText, user: messageName, added: new Date()});
  res.redirect("/");
});

module.exports = indexRouter;
