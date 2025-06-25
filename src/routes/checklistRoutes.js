const express = require('express');
const { getChecklists, create, remove } = require('../controllers/checklistController');
const authenticate = require('../middlewares/authMiddleware');
const router = express.Router();

router.use(authenticate);
router.get('/', getChecklists);
router.post('/', create);
router.delete('/:id', remove);

module.exports = router;