import { SignUpSchema } from '../../../../validation/schemas'
import bcrypt from 'bcryptjs'
import User from '../../models/User'
import { setUserSession } from '../../utils/auth'
import checkUserSignUpType from '../../utils/checkUserSignUpType'


const signUp = async (parent, { email, password, confirmPassword }, { req, res }, info) => {
  return SignUpSchema.validate({ email, password, confirmPassword }).then(values => {
    return User.findOne({ email }).then(user => {
      if (!user) {
        return bcrypt.genSalt(10).then(salt => {
          return bcrypt.hash(password, salt).then(hash => {
            return User({ email, password: hash }).save().then(user => {
              return setUserSession(res, user._id).then(() => {
                return user
              }).catch(err => { throw err })
            }).catch(err => { throw err })
          }).catch(err => { throw err })
        }).catch(err => { throw err })
      } else {
        return checkUserSignUpType(user).then(signUpType => {
          if (signUpType === 'Normal') {
            throw new Error('This email is already registered.')
          } else { throw new Error(`This email is registered through ${signUpType}.`) }
        }).catch(err => { throw err })
      }
    }).catch(err => { throw err })
  }).catch(err => { throw err })
}


export default signUp