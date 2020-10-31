import {
  ForgotPasswordSchema,
  ForgotPasswordChangePasswordSchema,
  ForgotPasswordChangePasswordEnsureSchema,
  ChangePasswordSchema
} from '../../../../validation/schemas'
import bcrypt from 'bcryptjs'
import User from '../../../../models/User'
import { setUserSession } from '../../utils/auth'
import settings from '../../../../settings'
import { sendMail } from '../../utils/mailer'
const cryptoRandomString = require('crypto-random-string')


const forgotPassword = {
  forgotPasswordForm: async (parent, { email }, { req, res }, info) => {
    return ForgotPasswordSchema.validate({ email }).then(values => {
      return User.exists({ email }).then(exists => {
        if (exists) {
          return cryptoRandomString.async({ length: 64 }).then(randomString => {
            return User.updateOne({ email }, { forgotPasswordToken: randomString }).then(raw => {
              const recoveryLink = `${settings.clientURI}forgot-password?email=${email}&forgotPasswordToken=${randomString}`
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
        } else { throw new Error('This email is not registered.') }
      }).catch(err => { throw err })
    }).catch(err => { throw err })
  },




  forgotPasswordChangePassword: (parent, { email, forgotPasswordToken, newPassword, confirmNewPassword }, { req, res }, info) => {

  },

  forgotPasswordChangePasswordEnsure: (parent, { email, forgotPasswordToken }, { req, res }, info) => {

  }
}





export default forgotPassword