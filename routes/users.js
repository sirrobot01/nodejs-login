const express = require('express');
const router = express.Router();
const userCtrl = require('../app/api/controllers/users');


router.post('/register', userCtrl.create);
router.post('authenticate', userCtrl.authenticate);


module.exports = router