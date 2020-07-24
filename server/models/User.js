const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  lastPasswordUpdate: {
    type: Date
  },
  date: {
    type: Date,
    default: Date.now
  },
  passwordLastUpdated: {
    type: Date,
    default: Date.now
  }
})

const User = mongoose.model('User', UserSchema)

module.exports = User