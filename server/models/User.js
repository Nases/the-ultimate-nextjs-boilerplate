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
  firstName: {
    type: String,
    default: null
  },
  lastName: {
    type: String,
    default: null
  },
  address: {
    type: String,
    default: null
  },
  lastPasswordUpdate: {
    type: Date
  },
  registrationDate: {
    type: Date,
    default: Date.now
  },
  passwordLastUpdated: {
    type: Date,
    default: Date.now
  },
  forgotPasswordToken: {
    type: String,
    default: null
  }
})

const User = mongoose.model('User', UserSchema)

module.exports = User