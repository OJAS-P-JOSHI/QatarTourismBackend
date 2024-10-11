const express = require('express');
const { register, login, validateToken } = require('../controllers/authController');

const router = express.Router();

router.post('/register', register);    // User registration
router.post('/login', login);          // User login
router.get('/validate-token', validateToken);  // Token validation route

module.exports = router;
