const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: {
    type: String,
    enum: [
      "Private tours",
      "Group tours",
      "City tours",
      "Desert safari",
      "Multi-day packages",
      "Museum tours",
      "Tickets",
      "Attractions",
      "Parks",
      "Hotels",
      "Services"
    ],
    required: true
  },
  price: { type: Number, required: true },
  duration: { 
    type: String,
    enum: ["0-3 hours", "3-5 hours", "5-7 hours", "Full day (7+ hours)", "Multi-day"],
    required: true 
  },
  location: { type: String, required: true },
  languages: {
    type: [String],
    enum: ["English", "Dutch", "German", "French", "Italian"]
  },
  rating: { type: Number, min: 1, max: 5, default: 5 },
  features: { type: [String], enum: ["Deals & Discounts", "Free Cancellation", "Likely to Sell Out", "Skip-The-Line", "Private Tour"] },
  speedFeatures: { type: String, enum: ["Fast", "Steady", "Speedy", "Furious", "Grind"] },
  included: [{ id: Number, text: String }],
  excluded: [{ id: Number, text: String }],
  roadmap: [
    {
      id: Number,
      icon: String,
      title: String,
      content: String
    }
  ],
  createdAt: { type: Date, default: Date.now },
  bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
});

module.exports = mongoose.model('Tour', tourSchema);
