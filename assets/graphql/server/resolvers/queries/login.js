import { LoginSchema } from '../../../../validation/schemas'
import bcrypt from 'bcryptjs'
import dbConnect from '../../utils/dbConnect'
import User from '../../../../models/User'
import { setUserSession } from '../../utils/auth'

const login = async (obj, { email, password }, { req, res }, info) => {
  dbConnect()

  return await LoginSchema.validate({ email, password }).then(async values => {
    return await User.findOne({ email }).then(async user => {
      if (user) {
        return await bcrypt.compare(password, user.password).then(async isMatch => {
          if (isMatch) {
            return await setUserSession(res, user._id).then(async () => {
              return user
            })
          } else {
            throw new Error('Wrong password.')
          }
        })
      } else {
        throw new Error('That email is not registered.')
      }
    }).catch(err => { throw err })
  }).catch(err => { throw err })
}

export default login