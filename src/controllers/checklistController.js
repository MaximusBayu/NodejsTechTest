const { createChecklist, getAllChecklists, deleteChecklist } = require('../models/Checklist');

const getChecklists = async (req, res) => {
  const checklists = await getAllChecklists(req.user.id);
  res.json(checklists);
};

const create = async (req, res) => {
  const checklist = await createChecklist(req.body.name, req.user.id);
  res.json(checklist);
};

const remove = async (req, res) => {
  await deleteChecklist(req.params.id, req.user.id);
  res.json({ message: 'Checklist deleted' });
};

module.exports = { getChecklists, create, remove };
