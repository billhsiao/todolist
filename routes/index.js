const express = require('express');
const router = express.Router();
const taskController = require('../controller/task')

/* GET home page. */
router.get('/', taskController.index);
router.get('/new', taskController.new);
router.post('/', taskController.create);
router.get('/:id/edit', taskController.edit);
router.put('/:id', taskController.update);
router.delete('/:id', taskController.remove);
router.get('/:id/expand', taskController.expand);
router.put('/:id', taskController.detail)

module.exports = router;
