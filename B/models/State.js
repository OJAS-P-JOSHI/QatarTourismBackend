const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
  title: { type: String, required: true },
  amount: { type: String, required: true },
  today: { type: String, required: true },
  iconClass: { type: String, required: true },
});

module.exports = mongoose.model('State', stateSchema);
