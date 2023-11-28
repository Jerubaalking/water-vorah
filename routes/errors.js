const express = require('express');
const errors = require('../sdk/errors');
const router = express.Router();


router.get('/', errors.show);
router.post('/', errors.create);

module.exports = router;