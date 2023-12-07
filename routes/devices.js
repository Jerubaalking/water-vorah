const express = require('express');
const devices = require('../sdk/devices');
const router = express.Router();

router.get('/', devices.show);
router.post('/', devices.create);

module.exports = router;