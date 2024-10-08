const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  icon: { type: String, required: true },
  message: { type: String, required: true },
});

module.exports = mongoose.model('Notification', notificationSchema);
