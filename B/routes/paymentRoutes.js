const express = require('express');
const { createPaymentIntent } = require('../controllers/paymentController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

// Route to create a payment intent (with user protection if needed)
router.post('/create-payment-intent', protect, createPaymentIntent);

module.exports = router;
