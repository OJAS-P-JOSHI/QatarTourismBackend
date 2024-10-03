const mongoose = require('mongoose');

const specialOfferSchema = new mongoose.Schema({
  subtitle: { type: String },
  title: { type: String, required: true },
  text: { type: String },
  imgSrc: { type: String, required: true },
});

module.exports = mongoose.model('SpecialOffer', specialOfferSchema);
