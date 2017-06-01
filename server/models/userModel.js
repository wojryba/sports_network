const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-findorcreate');

const UserSchema = new Schema({
  user: {type: String, required: true, index: true, uniqe: true},
  location: String,
  sportsFollowed: [],
  eventsCreated: [],
});

UserSchema.plugin(findOrCreate);

const User = mongoose.model('User', UserSchema);


module.exports = User;