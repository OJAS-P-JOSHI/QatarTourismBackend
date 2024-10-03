const SpecialOffer = require('../models/SpecialOffer');

exports.createSpecialOffer = async (req, res) => {
  try {
    const specialOffer = await SpecialOffer.create(req.body);
    res.status(201).json({ success: true, data: specialOffer });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

exports.getSpecialOffers = async (req, res) => {
  try {
    const specialOffers = await SpecialOffer.find();
    res.status(200).json({ success: true, data: specialOffers });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

exports.getSpecialOffer = async (req, res) => {
  try {
    const specialOffer = await SpecialOffer.findById(req.params.id);
    if (!specialOffer) {
      return res.status(404).json({ success: false, message: 'Special Offer not found' });
    }
    res.status(200).json({ success: true, data: specialOffer });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

exports.updateSpecialOffer = async (req, res) => {
  try {
    const specialOffer = await SpecialOffer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!specialOffer) {
      return res.status(404).json({ success: false, message: 'Special Offer not found' });
    }

    res.status(200).json({ success: true, data: specialOffer });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

exports.deleteSpecialOffer = async (req, res) => {
  try {
    const specialOffer = await SpecialOffer.findByIdAndDelete(req.params.id);

    if (!specialOffer) {
      return res.status(404).json({ success: false, message: 'Special Offer not found' });
    }

    res.status(200).json({ success: true, message: 'Special Offer deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};
