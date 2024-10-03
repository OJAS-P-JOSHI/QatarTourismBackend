const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  imgSrc: { type: String, required: true },
  badge: { type: String, required: true },
  date: { type: String, required: true },
  author: { type: String, required: true },
  title: { type: String, required: true },
});

module.exports = mongoose.model('Article', articleSchema);
