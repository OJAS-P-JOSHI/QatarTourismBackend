const express = require('express');
const { createTour, getTours, getTour, updateTour, deleteTour } = require('../controllers/tourController');
const { protect, adminOnly } = require('../middlewares/authMiddleware');  // Ensure that protect and adminOnly are correctly imported

const router = express.Router();

// Protect the routes that need authentication and admin privileges
router.route('/')
  .post(protect, adminOnly, createTour)  // Only admin users can create tours
  .get(getTours);                        // Anyone can get all tours

router.route('/:id')
  .get(getTour)                          // Anyone can get a single tour by ID
  .put(protect, adminOnly, updateTour)   // Only admin users can update a tour
  .delete(protect, adminOnly, deleteTour); // Only admin users can delete a tour

module.exports = router;
