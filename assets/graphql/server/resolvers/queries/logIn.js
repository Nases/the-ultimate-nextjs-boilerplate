import { LogInSchema } from '../../../../validation/schemas'
import bcrypt from 'bcryptjs'
import User from '../../models/User'
import { setUserSession } from '../../utils/auth'
import checkUserSignUpType from '../../utils/checkUserSignUpType'


const logIn = async (parent, { email, password }, { req, res }, info) => {
  return LogInSchema.validate({ email, password }).then(values => {
    return User.findOne({ email }).then(user => {
      if (user) {
        return checkUserSignUpType(user).then(signUpType => {
          if (signUpType === 'Normal') {
            return bcrypt.compare(password, user.password).then(isMatch => {
              if (isMatch) {
                return setUserSession(res, user._id).then(() => {
                  return user
                }).catch(err => { throw err })
              } else { throw new Error('Wrong password.') }
            }).catch(err => { throw err })
          } else { throw new Error(`This email is registered through ${signUpType}.`) }
        }).catch(err => { throw err })
      } else { throw new Error('That email is not registered.') }
    }).catch(err => { throw err })
  }).catch(err => { throw err })
}


export default logIn