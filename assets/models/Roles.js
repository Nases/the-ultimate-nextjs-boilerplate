const mongoose = require('mongoose')

const Roles = mongoose.Schema({
  id: {
    type: Number,
    default: 1
  },
  role: {
    type: String,
    default: 'Customer'
  }
})

const User = mongoose.model('Roles', Roles)

module.exports = User