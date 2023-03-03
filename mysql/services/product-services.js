import pool from "../config/mysql-config.js";

export const getProduct = async () => {
  const [result] = await pool.query("SELECT * FROM product");
  return result;
};

export const createProduct = async (name, slug, imageUrl) => {
  const [result] = await pool.query(
    `INSERT INTO product (name, slug, imageUrl) VALUES (?,?,?)`,
    [name, slug, imageUrl]
  );
  return result;
};
export const deleteProduct = async (id) => {
  const [result] = await pool.query(`delete from product where id=${id}`);
  return result;
};
export const updateProduct = async (name, slug, imageUrl, id) => {
  const [result] = await pool.query(
    `UPDATE product SET name="${name}", slug="${slug}",imageUrl="${imageUrl}" where id=${id}`
  );
  return result;
};
export const getOnOfProduct = async (id) => {
  const [result] = await pool.query(`select * from product where id=${id}`);
  return result.length ? result[0] : null;
};
