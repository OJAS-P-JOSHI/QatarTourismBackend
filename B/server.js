const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const tourRoutes = require('./routes/tourRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const articleRoutes = require('./routes/articleRoutes');
const blogRoutes = require('./routes/blogRoutes');
const specialOfferRoutes = require('./routes/specialOfferRoutes');
const authRoutes = require('./routes/authRoutes'); 

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: '*' })); // Enable CORS for all origins

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/tours', tourRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/special-offers', specialOfferRoutes);

// app.use('/api/dashboard', dashboardRoutes);
// app.use('/api/messages', messageRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
