const pool = require("./pool");

const dbName = process.env.PGDATABASE;

async function getAllMessages() {
  const {rows} = await pool.query("SELECT * FROM $1", [dbName]);
  return rows;
}
async function insertMessage(id, message, username, added) {
  await pool.query(
    "INSERT INTO $1 (id, message, username, date) VALUES ($2, $3, $4, $5)",
    [dbName, id, message, username, added]
  );
}

async function getMessageById(id) {
  const {rows} = await pool.query("SELECT * FROM $1 WHERE id = $2 ", [
    dbName,
    id,
  ]);
}

module.exports = {
  getAllMessages,
  insertMessage,
};
