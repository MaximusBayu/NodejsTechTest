const pool = require('../config/db');

const addItem = async (checklistId, itemName) => {
  const result = await pool.query(
    'INSERT INTO items (checklist_id, name, is_done) VALUES ($1, $2, false) RETURNING *',
    [checklistId, itemName]
  );
  return result.rows[0];
};

const getItems = async (checklistId) => {
  const result = await pool.query('SELECT * FROM items WHERE checklist_id = $1', [checklistId]);
  return result.rows;
};

const getItem = async (checklistId, itemId) => {
  const result = await pool.query(
    'SELECT * FROM items WHERE checklist_id = $1 AND id = $2',
    [checklistId, itemId]
  );
  return result.rows[0];
};

const updateItemStatus = async (checklistId, itemId) => {
  const result = await pool.query(
    'UPDATE items SET is_done = NOT is_done WHERE checklist_id = $1 AND id = $2 RETURNING *',
    [checklistId, itemId]
  );
  return result.rows[0];
};

const deleteItem = async (checklistId, itemId) => {
  await pool.query('DELETE FROM items WHERE checklist_id = $1 AND id = $2', [checklistId, itemId]);
};

const renameItem = async (checklistId, itemId, newName) => {
  const result = await pool.query(
    'UPDATE items SET name = $1 WHERE checklist_id = $2 AND id = $3 RETURNING *',
    [newName, checklistId, itemId]
  );
  return result.rows[0];
};

module.exports = { addItem, getItems, getItem, updateItemStatus, deleteItem, renameItem };