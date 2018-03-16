const express = require('express');
const router = express.Router();
const taskController = require('../controller/task')

/* GET home page. */
router.get('/', taskController.index);

module.exports = router;
