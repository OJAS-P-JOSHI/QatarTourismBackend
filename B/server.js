const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Import CORS
const tourRoutes = require('./routes/tourRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const articleRoutes = require('./routes/articleRoutes');
const blogRoutes = require('./routes/blogRoutes');
const specialOfferRoutes = require('./routes/specialOfferRoutes');
const authRoutes = require('./routes/authRoutes'); 
const paymentRoutes = require('./routes/paymentRoutes'); 

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// CORS: Allow requests only from the frontend URL
app.use(cors({
  origin: '*',
  methods: 'GET,POST,PUT,DELETE',
  credentials: true, // Allow cookies if needed
}));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tours', tourRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/special-offers', specialOfferRoutes);
app.use('/api/payments', paymentRoutes);
// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
