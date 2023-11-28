const express = require('express');
const errors = require('../sdk/errors');
const router = express.Router();


router.get('/:id', errors.show);
router.post('/:id', errors.create);

module.exports = router;