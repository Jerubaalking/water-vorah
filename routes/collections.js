const express = require('express');
const collections = require('../sdk/collections');
const router = express.Router();


router.get('/', collections.show);
router.post('/', collections.create);

module.exports = router;