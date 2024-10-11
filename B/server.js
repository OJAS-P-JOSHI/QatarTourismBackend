const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Import CORS
const cookieParser = require('cookie-parser'); // Import cookie-parser
const session = require('express-session'); // Import express-session

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
app.use(cookieParser()); // Middleware to parse cookies

// CORS: Allow requests from all local hosts and specified frontend URL
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests from any local host (including localhost, 127.0.0.1, and any local IP)
    if (!origin || origin.startsWith('http://localhost') || origin.startsWith('http://127.0.0.1')) {
      return callback(null, true);
    }
    // Allow specified production URL
    if (origin === 'https://dubai-beta1.vercel.app') {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  },
  methods: 'GET,POST,PUT,DELETE',
  credentials: true, // Allow credentials (cookies)
}));

// Session configuration
app.use(session({
  secret: process.env.JWT_SECRET,  // Use JWT secret for session secret
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, httpOnly: true }, // Set secure to true in production
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
