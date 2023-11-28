const express = require('express');
const healths = require('../sdk/healths');
const router = express.Router();


router.get('/', healths.show);
router.post('/', healths.create);

module.exports = router;