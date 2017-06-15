const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./userModel');

const EventSchema = new Schema({
  creator: { type: String, index: true, ref: 'User' },
  event: {type: String, required: true},
  date: String,
  time: Number,
  sport: String,
  location: String,
  description: String
})

const Event = mongoose.model('Event', EventSchema);

module.exports = Event
