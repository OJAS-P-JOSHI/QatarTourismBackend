const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { 
    type: String, 
    enum: [
      'PRIVATE_TOUR', 'GROUP_TOUR', 'CITY_TOUR', 'DESERT_SAFARI',
      'MULTI_DAY_PACKAGE', 'MUSEUM_TOUR', 'TICKET', 'ATTRACTION',
      'PARK', 'HOTEL', 'SERVICE'
    ],
    required: true
  },
  price: { type: Number, required: true },
  duration: { type: Number, required: true }, // Duration in hours or days
  location: { type: String, required: true },
  availableFrom: { type: Date, required: true },
  availableTo: { type: Date, required: true },
  maxPeople: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
});

module.exports = mongoose.model('Tour', tourSchema);
