const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const { clientID, clientSecret, redirectURIs } = googleCredentials;

passport.use(new GoogleStrategy({
  clientID: clientID,
  clientSecret: clientSecret,
  callbackURL: redirectURIs[0], // Using the first redirect URI
}, (accessToken, refreshToken, profile, done) => {
  // Handle authenticated user logic here
}));

// Connect to MongoDB using the URI from .env
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully!'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));
