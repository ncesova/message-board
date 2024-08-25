const {Client} = require("pg");
const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id VARCHAR (255) PRIMARY KEY,
  message VARCHAR (255),
  username VARCHAR ( 255 ),
  date TIMESTAMP
);`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
