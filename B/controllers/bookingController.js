const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
  try {
    const { tourId, bookingDate, people } = req.body;
    const booking = await Booking.create({
      user: req.user._id,
      tour: tourId,
      bookingDate,
      people,
    });

    res.status(201).json({ success: true, data: booking });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('user tour');
    res.status(200).json({ success: true, data: bookings });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

exports.getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id }).populate('tour');
    res.status(200).json({ success: true, data: bookings });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};
