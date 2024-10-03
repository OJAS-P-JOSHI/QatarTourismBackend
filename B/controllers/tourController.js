const Tour = require('../models/Tour');

exports.createTour = async (req, res) => {
  try {
    const tour = await Tour.create(req.body);
    res.status(201).json({ success: true, data: tour });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

exports.getTours = async (req, res) => {
  try {
    const tours = await Tour.find().populate('reviews');
    res.status(200).json({ success: true, data: tours });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id).populate('reviews bookings');
    if (!tour) {
      return res.status(404).json({ success: false, message: 'Tour not found' });
    }
    res.status(200).json({ success: true, data: tour });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!tour) {
      return res.status(404).json({ success: false, message: 'Tour not found' });
    }

    res.status(200).json({ success: true, data: tour });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);

    if (!tour) {
      return res.status(404).json({ success: false, message: 'Tour not found' });
    }

    res.status(200).json({ success: true, message: 'Tour deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};
