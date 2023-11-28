const express = require('express');
const securities = require('../sdk/securities');
const router = express.Router();


router.get('/', securities.show);
router.post('/', securities.create);

module.exports = router;