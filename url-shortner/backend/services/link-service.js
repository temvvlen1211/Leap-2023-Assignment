import shortid from "shortid";
import pool from "../configs/mysql-config.js";

export const isValidURL = (url) => {
  return /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(
    url
  );
};

export const shorten = async (url) => {
  const id = shortid.generate();
  await pool.query(`insert into links values (?,?)`, [id, url]);
  return id;
};
export const findOneById = async (id) => {
  const [result] = await pool.query(`select * from links where id = ?`, [id]);
  return result.length ? result[0] : null;
};
