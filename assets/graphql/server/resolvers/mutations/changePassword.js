import { ChangePasswordSchema } from '../../../../validation/schemas'
import bcrypt from 'bcryptjs'
import User from '../../models/User'


const changePassword = (parent, { currentPassword, newPassword, confirmNewPassword }, { req, res }, info) => {
  return req.isAuthenticated(req, ['CUSTOMER', 'ADMIN']).then(user => {
    return ChangePasswordSchema.validate({ currentPassword, newPassword, confirmNewPassword }).then(values => {
      return bcrypt.compare(newPassword, user.password).then(isMatch => {
        if (!isMatch) {
          return bcrypt.compare(currentPassword, user.password).then(isMatch => {
            if (isMatch) {
              return bcrypt.genSalt(10).then(salt => {
                return bcrypt.hash(newPassword, salt).then(hash => {
                  return User.updateOne({ email: user.email }, { password: hash, passwordLastUpdated: Date.now() }).then(raw => {
                    return 'Password changed successfully.'
                  }).catch(err => { throw err })
                }).catch(err => { throw err })
              }).catch(err => { throw err })
            } else { throw new Error('Wrong password.') }
          }).catch(err => { throw err })
        } else { throw new Error('The new password must be different from your current one.') }
      }).catch(err => { throw err })
    }).catch(err => { throw err })
  }).catch(err => { throw err })
}


export default changePassword