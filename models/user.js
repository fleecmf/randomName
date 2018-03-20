var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  username : String,
  password : String,
  createDate : Date
});

module.exports = mongoose.model('User',UserSchema);