import { LoginSchema } from '../../../../validation/schemas'
import bcrypt from 'bcryptjs'
import dbConnect from '../../utils/dbConnect'
import User from '../../../../models/User'
import { setUserSession } from '../../utils/auth'


const login = async (obj, { email, password }, { req, res }, info) => {
  dbConnect()

  return LoginSchema.validate({ email, password }).then(values => {
    return User.findOne({ email }).then(user => {
      if (user) {
        return bcrypt.compare(password, user.password).then(isMatch => {
          if (isMatch) {
            return setUserSession(res, user._id).then(() => {
              return user
            }).catch(err => { throw err })
          } else { throw new Error('Wrong password.') }
        }).catch(err => { throw err })
      } else { throw new Error('That email is not registered.') }
    }).catch(err => { throw err })
  }).catch(err => { throw err })
}

export default login