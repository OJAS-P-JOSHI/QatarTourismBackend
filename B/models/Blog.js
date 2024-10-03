const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  image: { type: String, required: true },
  date: { type: String, required: true },
  author: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String, required: true },
  badge: { type: String, required: true },
  continent: { type: String, required: true },
});

module.exports = mongoose.model('Blog', blogSchema);
