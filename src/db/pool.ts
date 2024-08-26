import {Pool} from "pg";
import "dotenv/config";

export default new Pool({
  connectionString: `${process.env.DATABASE_URL}`,
});
