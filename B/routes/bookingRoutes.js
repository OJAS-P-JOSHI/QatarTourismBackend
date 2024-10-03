const express = require('express');
const { createBooking, getBookings, getUserBookings } = require('../controllers/bookingController');
const { protect, adminOnly } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/')
  .post(protect, createBooking)  // User only
  .get(protect, adminOnly, getBookings);  // Admin only

router.get('/user', protect, getUserBookings);

module.exports = router;
