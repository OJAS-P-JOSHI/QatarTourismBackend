const express = require('express');
const { createReview, getTourReviews, updateReview, deleteReview } = require('../controllers/reviewController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/')
  .post(protect, createReview);  // User only

router.get('/tour/:tourId', getTourReviews);

router.route('/:id')
  .put(protect, updateReview)  // User only
  .delete(protect, deleteReview);  // User only

module.exports = router;
