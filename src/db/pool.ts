import {Pool} from "pg";
import "dotenv/config";

console.log(process.env.DATABASE_URL);

export default new Pool({
  connectionString: `${process.env.DATABASE_URL}`,
});
