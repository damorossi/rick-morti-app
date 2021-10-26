const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

// api/auth
router.post('/register', authController.createUser);
router.post('/signup', authController.signup);

module.exports = router;