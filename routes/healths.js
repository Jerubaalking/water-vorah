const express = require('express');
const healths = require('../sdk/healths');
const router = express.Router();


router.get('/:id', healths.show);
router.post('/:id', healths.create);

module.exports = router;