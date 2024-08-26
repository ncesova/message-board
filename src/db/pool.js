"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
require("dotenv/config");
exports.default = new pg_1.Pool({
    connectionString: `${process.env.DATABASE_URL}`,
});
