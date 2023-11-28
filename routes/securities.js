const express = require('express');
const securities = require('../sdk/securities');
const router = express.Router();


router.get('/:id', securities.show);
router.post('/:id', securities.create);

module.exports = router;