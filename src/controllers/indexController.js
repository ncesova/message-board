"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { v4: uuidv4 } = require("uuid");
const fecha_1 = __importDefault(require("fecha"));
const queries_1 = __importDefault(require("../db/queries"));
exports.getIndex = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const messages = yield queries_1.default.getAllMessages();
    res.render("index", { messages: messages });
});
exports.getNew = (req, res) => {
    res.render("newMessage", {});
};
exports.postNew = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const messageId = uuidv4();
    const messageName = req.body.name;
    const messageText = req.body.message;
    const messageDate = fecha_1.default.format(new Date(), "YYYY-MM-DD HH:mm:ss");
    const message = {
        id: messageId,
        message: messageText,
        username: messageName,
        added: messageDate,
    };
    yield queries_1.default.insertMessage(message);
    res.redirect("/");
});
exports.getMessageById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const message = yield queries_1.default.getMessageById(id);
    res.render("descMessage", {
        message: message,
    });
});
