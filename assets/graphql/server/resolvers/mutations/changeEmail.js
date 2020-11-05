import { ChangeEmailSchema } from '../../../../validation/schemas'
import bcrypt from 'bcryptjs'
import User from '../../models/User'


const changeEmail = (parent, { email, password }, { req, res }, info) => {
  return req.isAuthenticated(req, ['CUSTOMER', 'ADMIN']).then(user => {
    return ChangeEmailSchema.validate({ email, password }).then(values => {
      if (email !== user.email) {
        return User.exists({ email }).then(exists => {
          if (!exists) {
            return bcrypt.compare(password, user.password).then(isMatch => {
              if (isMatch) {
                return User.updateOne({ email: user.email }, { email }).then(raw => {
                  return 'Email successfully changed.'
                }).catch(err => { throw err })
              } else { throw new Error('Wrong password.') }
            }).catch(err => { throw err })
          } else { throw new Error('This email is already registered.') }
        }).catch(err => { throw err })
      } else { throw new Error('The new e-mail address must be different from your current one.') }
    }).catch(err => { throw err })
  }).catch(err => { throw err })
}


export default changeEmail