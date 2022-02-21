const express = require('express');
const router = express.Router();
const resto = require('../controllers/resto');
const auth = require('../middleware/auth');

router.get('/', resto.getAllResto);
router.get('/:id', resto.getOneResto);
router.post('/', resto.newresto);
router.put('/:id', resto.updateResto);
router.delete('/:id', resto.deleteResto);

module.exports = router;