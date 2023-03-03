import pool from "../config/mysql-config.js";

export const getCategories = async () => {
  const [result] = await pool.query("SELECT * FROM category");
  return result;
};

export const createCategory = async (name, slug, imageUrl) => {
  const [result] = await pool.query(
    `INSERT INTO category (name, slug, imageUrl) VALUES (?,?,?)`,
    [name, slug, imageUrl]
  );
  return result;
};
export const deleteCategory = async (id) => {
  const [result] = await pool.query(`delete from category where id=${id}`);
  return result;
};
export const updateCategory = async (name, slug, imageUrl, id) => {
  const [result] = await pool.query(
    `UPDATE category SET name="${name}", slug="${slug}",imageUrl="${imageUrl}" where id=${id}`
  );
  return result;
};
export const getOnOfCategory = async (id) => {
  const [result] = await pool.query(`select * from category where id=${id}`);
  return result.length ? result[0] : null;
};
