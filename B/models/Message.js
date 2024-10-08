const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  image: { type: String, required: true },
  badgeColor: { type: String },
  badgeText: { type: String },
  name: { type: String, required: true },
  role: { type: String, required: true },
  time: { type: String, required: true },
});

module.exports = mongoose.model('Message', messageSchema);
