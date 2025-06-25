const express = require('express');
const { create, list, detail, toggle, remove, rename } = require('../controllers/itemController');
const authenticate = require('../middlewares/authMiddleware');
const router = express.Router({ mergeParams: true });

router.use(authenticate);
router.get('/:checklistId/item', list);
router.post('/:checklistId/item', create);
router.get('/:checklistId/item/:itemId', detail);
router.put('/:checklistId/item/:itemId', toggle);
router.delete('/:checklistId/item/:itemId', remove);
router.put('/:checklistId/item/rename/:itemId', rename);

module.exports = router;