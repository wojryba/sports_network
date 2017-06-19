const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-findorcreate');
const Event = require('./eventModel');

const UserSchema = new Schema({
  user: {type: String, required: true, index: true, uniqe: true},
  name: String,
  location: String,
  sportsFollowed: [],
  eventsCreated: [{type: Schema.Types.ObjectId, ref: 'Event', default: []}],
});

UserSchema.plugin(findOrCreate);

const User = mongoose.model('User', UserSchema);


module.exports = User;
