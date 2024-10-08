const express = require('express');
const { createTour, getTours, getTour, updateTour, deleteTour } = require('../controllers/tourController');
const { protect, adminOnly } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/')
  .post(protect, adminOnly, createTour)
  .get(getTours);

router.route('/:id')
  .get(getTour)
  .put(protect, adminOnly, updateTour)
  .delete(protect, adminOnly, deleteTour);

module.exports = router;
