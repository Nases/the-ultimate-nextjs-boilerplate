import mongoose from 'mongoose'


const UserSchema = mongoose.Schema({
  role: {
    type: String,
    default: 'ADMIN'
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    default: null
  },
  firstName: {
    type: String,
    default: null
  },
  lastName: {
    type: String,
    default: null
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
  },
  facebookID: {
    type: String,
    default: null
  },
  googleID: {
    type: String,
    default: null
  }
})


let User
try {
  User = mongoose.model('User')
} catch (err) {
  User = mongoose.model('User', UserSchema)
}


export default User