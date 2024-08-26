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
const pool_1 = __importDefault(require("./pool"));
const fecha_1 = require("fecha");
function getAllMessages() {
    return __awaiter(this, void 0, void 0, function* () {
        const { rows } = yield pool_1.default.query("SELECT * FROM messages");
        const mappedMessages = rows.map((item) => {
            return Object.assign(Object.assign({}, item), { added: (0, fecha_1.format)(item.date, "YYYY-MM-DD HH:mm:ss") });
        });
        return mappedMessages;
    });
}
function insertMessage(_a) {
    return __awaiter(this, arguments, void 0, function* ({ id, message, username, added }) {
        yield pool_1.default.query("INSERT INTO messages VALUES ($1, $2, $3, TO_TIMESTAMP($4, 'YYYY-MM-DD HH:MI:SS'))", [id, message, username, added]);
    });
}
function getMessageById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const { rows } = yield pool_1.default.query("SELECT * FROM messages WHERE id = $1 ", [
            id,
        ]);
        const item = rows[0];
        return Object.assign(Object.assign({}, item), { added: item.date.toString() });
    });
}
const db = {
    getAllMessages,
    insertMessage,
    getMessageById,
};
exports.default = db;
