const mongoose = require('mongoose');

const sidebarItemSchema = new mongoose.Schema({
  href: { type: String, required: true },
  iconClass: { type: String, required: true },
  label: { type: String, required: true },
});

module.exports = mongoose.model('SidebarItem', sidebarItemSchema);
