const express = require('express');
const roles = require('../sdk/roles');
const router = express.Router();


router.get('/', roles.show);
router.post('/', roles.create);

module.exports = router;