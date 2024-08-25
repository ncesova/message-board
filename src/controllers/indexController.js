const {v4: uuidv4} = require("uuid");
const fecha = require("fecha");
const db = require("../db/queries");

exports.getIndex = (req, res) => {
  db.getAllMessages().then((res) => {
    res.render("index", {messages: messages});
  });
};

exports.getNew = (req, res) => {
  res.render("newMessage", {});
};

exports.postNew = (req, res) => {
  const messageName = req.body.name;
  const messageText = req.body.message;
  messages.push({
    id: uuidv4(),
    message: messageText,
    username: messageName,
    added: fecha.format("YYYY-MM-DD HH:mm:ss"),
  });
  res.redirect("/");
};

exports.getMessageById = (req, res) => {
  res.render("descMessage", {
    message: messages.filter((item) => item.id === req.params.id)[0],
  });
};
