import {
  ForgotPasswordSchema,
  ForgotPasswordChangePasswordSchema,
  ForgotPasswordChangePasswordEnsureSchema
} from '../../../../validation/schemas'
import bcrypt from 'bcryptjs'
import User from '../../models/User'
import { sendMail } from '../../utils/mailer'
import cryptoRandomString from 'crypto-random-string'
import checkUserSignUpType from '../../utils/checkUserSignUpType'


const forgotPassword = {
  forgotPasswordForm: async (parent, { email }, { req, res }, info) => {
    return ForgotPasswordSchema.validate({ email }).then(values => {
      return User.findOne({ email }).then(user => {
        if (user) {
          return checkUserSignUpType(user).then(signUpType => {
            if (signUpType === 'Normal') {
              return cryptoRandomString.async({ length: 64 }).then(randomString => {
                return User.updateOne({ email }, { forgotPasswordToken: randomString }).then(raw => {
                  const recoveryLink = `${process.env.NODE_ENV == 'production' ? 'https://' : 'http://'}${req.headers.host}/forgot-password?email=${email}&forgotPasswordToken=${randomString}`
                  return sendMail({
                    to: email,
                    subject: "Password Recovery",
                    text: 'Please use the link to recover your password: ' + recoveryLink,
                    html: 'Please use the link to recover your password: ' + recoveryLink,
                  }).then(() => {
                    return 'Recovery email sent, please check your email.'
                  }).catch(err => { throw err })
                }).catch(err => { throw err })
              }).catch(err => { throw err })
            } else { throw new Error(`This email is registered through ${signUpType}.`) }
          }).catch(err => { throw err })
        } else { throw new Error('This email is not registered.') }
      }).catch(err => { throw err })
    }).catch(err => { throw err })
  },

  forgotPasswordChangePassword: (parent, { email, forgotPasswordToken, newPassword, confirmNewPassword }, { req, res }, info) => {
    return ForgotPasswordChangePasswordEnsureSchema.validate({ email, forgotPasswordToken }).then(values => {
      return User.findOne({ email, forgotPasswordToken }).then(values => {
        if (values) {
          return ForgotPasswordChangePasswordSchema.validate({ newPassword, confirmNewPassword }).then(values => {
            return bcrypt.genSalt(10).then(salt => {
              return bcrypt.hash(newPassword, salt).then(hash => {
                return User.updateOne({ email }, { password: hash, passwordLastUpdated: Date.now(), forgotPasswordToken: null }).then(raw => {
                  return 'Password changed successfully.'
                }).catch(err => { throw err })
              }).catch(err => { throw err })
            }).catch(err => { throw err })
          }).catch(err => { throw err })
        } else { throw new Error('Given email and Forgot Password Token does not match.') }
      }).catch(err => { throw err })
    }).catch(err => { throw err })
  },

  forgotPasswordChangePasswordEnsure: (parent, { email, forgotPasswordToken }, { req, res }, info) => {
    return ForgotPasswordChangePasswordEnsureSchema.validate({ email, forgotPasswordToken }).then(values => {
      if (forgotPasswordToken === null) console.log('forgotPasswordToken is null')
      return User.exists({ email, forgotPasswordToken }).then(exists => {
        if (exists) {
          return 'Email and Forgot Password Token matches.'
        } else { throw new Error('Email and Forgot Password Token does not match.') }
      }).catch(err => { throw err })
    }).catch(err => { throw err })
  }
}


export default forgotPassword