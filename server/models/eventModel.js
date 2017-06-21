const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./userModel');

const EventSchema = new Schema({
  creator: { type: String, index: true, ref: 'User' },
  event: {type: String, required: true},
  date: String,
  time: String,
  sport: String,
  location: {type: String, required: true},
  description: String,
  people: {type: Array, default: [], ref:'User'},
  enableDelete: Boolean
})

const Event = mongoose.model('Event', EventSchema);

module.exports = Event
