import { createPool } from "mysql2";

const pool = createPool({
  host: "localhost",
  name: "root",
  port: 3306,
  password: "",
  databases: "green",
}).promise();

export default pool;
