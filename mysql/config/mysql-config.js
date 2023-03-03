import { createPool } from "mysql2";

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "green",
  port: 3307,
}).promise();
export default pool;
