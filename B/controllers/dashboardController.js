const SidebarItem = require('../models/SidebarItem');

exports.getSidebarItems = async (req, res) => {
  try {
    const sidebarItems = await SidebarItem.find();
    res.status(200).json({ success: true, data: sidebarItems });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

const State = require('../models/State');

exports.getStates = async (req, res) => {
  try {
    const states = await State.find();
    res.status(200).json({ success: true, data: states });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

const Notification = require('../models/Notification');

exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.status(200).json({ success: true, data: notifications });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};
