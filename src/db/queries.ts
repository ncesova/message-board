import {Message} from "../types/message";
import pool from "./pool";
import {format} from "fecha";

async function getAllMessages() {
  const {rows} = await pool.query("SELECT * FROM messages");
  const mappedMessages = rows.map((item) => {
    return {
      ...item,
      added: format(item.date, "YYYY-MM-DD HH:mm:ss"),
    } as Message;
  });
  return mappedMessages;
}

async function insertMessage({id, message, username, added}: Message) {
  await pool.query(
    "INSERT INTO messages VALUES ($1, $2, $3, TO_TIMESTAMP($4, 'YYYY-MM-DD HH:MI:SS'))",
    [id, message, username, added]
  );
}

async function getMessageById(id: string) {
  const {rows} = await pool.query("SELECT * FROM messages WHERE id = $1 ", [
    id,
  ]);
  const item = rows[0];
  return {...item, added: item.date.toString()} as Message;
}

const db = {
  getAllMessages,
  insertMessage,
  getMessageById,
};

export default db;
