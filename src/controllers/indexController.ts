const {v4: uuidv4} = require("uuid");
import fecha from "fecha";
import db from "../db/queries";
import {Message} from "../types/message";

exports.getIndex = async (req, res) => {
  const messages = await db.getAllMessages();
  res.render("index", {messages: messages});
};

exports.getNew = (req, res) => {
  res.render("newMessage", {});
};

exports.postNew = async (req, res) => {
  const messageId = uuidv4();
  const messageName = req.body.name;
  const messageText = req.body.message;
  const messageDate = fecha.format(new Date(), "YYYY-MM-DD HH:mm:ss");
  const message: Message = {
    id: messageId,
    message: messageText,
    username: messageName,
    added: messageDate,
  };
  await db.insertMessage(message);
  res.redirect("/");
};

exports.getMessageById = async (req, res) => {
  const id = req.params.id;
  const message = await db.getMessageById(id);
  res.render("descMessage", {
    message: message,
  });
};
