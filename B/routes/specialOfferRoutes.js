const express = require('express');
const { createSpecialOffer, getSpecialOffers, getSpecialOffer, updateSpecialOffer, deleteSpecialOffer } = require('../controllers/specialOfferController');
const { protect, adminOnly } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/')
  .post(protect, adminOnly, createSpecialOffer)
  .get(getSpecialOffers);

router.route('/:id')
  .get(getSpecialOffer)
  .put(protect, adminOnly, updateSpecialOffer)
  .delete(protect, adminOnly, deleteSpecialOffer);

module.exports = router;
