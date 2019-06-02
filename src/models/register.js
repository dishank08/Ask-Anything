const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
  fname: {
    type: String,
  },
  lname: {
    type: String,
  },
  username: {
    type: String,
    unique:true
  },

  password: {
    type: String
  },
},{
    collection: 'users'
});

module.exports = mongoose.model('User', User);