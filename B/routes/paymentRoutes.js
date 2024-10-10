const express = require('express');
const { createPaymentIntent } = require('../controllers/paymentController');
const { protect } = require('../middlewares/authMiddleware'); // If you want to protect routes

const router = express.Router();

// Route to create payment intent
router.post('/create-payment-intent', createPaymentIntent);

module.exports = router;
