const express = require('express');
const collections = require('../sdk/collections');
const router = express.Router();


router.get('/:id', collections.show);
router.post('/:id', collections.create);

module.exports = router;