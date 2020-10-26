import { SignUpSchema } from '../../../../validation/schemas'
import bcrypt from 'bcryptjs'
import dbConnect from '../../utils/dbConnect'
import User from '../../../../models/User'
import { setUserSession } from '../../utils/auth'


const signUp = async (obj, { email, password, confirmPassword }, { req, res }, info) => {
  dbConnect()

  return await SignUpSchema.validate({ email, password, confirmPassword }).then(async values => {
    return await User.exists({ email }).then(async exists => {
      if (!exists) {
        return await bcrypt.genSalt(10).then(async salt => {
          return await bcrypt.hash(password, salt).then(async hash => {
            return await User({ email, password: hash }).save().then(async user => {
              return await setUserSession(res, user._id).then(async () => {
                return user
              }).catch(err => { throw err })
            }).catch(err => { throw err })
          }).catch(err => { throw err })
        }).catch(err => { throw err })
      } else { throw new Error('This email is already registered.') }
    }).catch(err => { throw err })
  }).catch(err => { throw err })
}

export default signUp