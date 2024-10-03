const express = require('express');
const { createTour, getTours, getTour, updateTour, deleteTour } = require('../controllers/tourController');
const { protect, adminOnly } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/')
  .post(protect, adminOnly, createTour)  // Admin only
  .get(getTours);

router.route('/:id')
  .get(getTour)
  .put(protect, adminOnly, updateTour)  // Admin only
  .delete(protect, adminOnly, deleteTour);  // Admin only

module.exports = router;
