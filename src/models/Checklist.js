const pool = require('../config/db');

const createChecklist = async (name, userId) => {
  const result = await pool.query(
    'INSERT INTO checklists (name, user_id) VALUES ($1, $2) RETURNING *',
    [name, userId]
  );
  return result.rows[0];
};

const getAllChecklists = async (userId) => {
  const result = await pool.query('SELECT * FROM checklists WHERE user_id = $1', [userId]);
  return result.rows;
};

const deleteChecklist = async (id, userId) => {
  await pool.query('DELETE FROM checklists WHERE id = $1 AND user_id = $2', [id, userId]);
};

module.exports = { createChecklist, getAllChecklists, deleteChecklist };