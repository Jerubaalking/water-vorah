const express = require('express');
const users = require('../sdk/users');
const router = express.Router();


router.get('/', users.show);
router.post('/', users.create);

module.exports = router;