const { addItem, getItems, getItem, updateItemStatus, deleteItem, renameItem } = require('../models/Item');

const create = async (req, res) => {
  const item = await addItem(req.params.checklistId, req.body.itemName);
  res.json(item);
};

const list = async (req, res) => {
  const items = await getItems(req.params.checklistId);
  res.json(items);
};

const detail = async (req, res) => {
  const item = await getItem(req.params.checklistId, req.params.itemId);
  res.json(item);
};

const toggle = async (req, res) => {
  const item = await updateItemStatus(req.params.checklistId, req.params.itemId);
  res.json(item);
};

const remove = async (req, res) => {
  await deleteItem(req.params.checklistId, req.params.itemId);
  res.json({ message: 'Item deleted' });
};

const rename = async (req, res) => {
  const item = await renameItem(req.params.checklistId, req.params.itemId, req.body.itemName);
  res.json(item);
};

module.exports = { create, list, detail, toggle, remove, rename };
