import User from '../../models/User'
import { setUserSession } from '../../utils/auth'
import * as yup from 'yup'
import checkUserSignUpType from '../../utils/checkUserSignUpType'


const schema = yup.object().shape({
  email: yup
    .string()
    .required()
    .min(0, 'Email must be at least 0 characters long')
    .max(200, 'Email can be maximum 200 characters long'),
  facebookID: yup
    .string()
    .required()
    .min(1, 'Id must be at least 1')
    .max(1000, 'Id can be maximum 1000')
})


const facebookOAuth = async (parent, { facebookID, email }, { req, res }, info) => {
  return schema.validate({ facebookID, email }).then(values => {
    return User.findOne({ email }).then(user => {
      if (!user) {
        return User({ email, facebookID }).save().then(user => {
          return setUserSession(res, user._id).then(() => {
            return user
          }).catch(err => { throw err })
        }).catch(err => { throw err })
      } else if (facebookID === user.facebookID) {
        return setUserSession(res, user._id).then(() => {
          return user
        }).catch(err => { throw err })
      } else {
        return checkUserSignUpType(user).then(signUpType => {
          if (signUpType === 'Normal') {
            throw new Error('This email is already registered.')
          } else {
            throw new Error(`This email is registered through ${signUpType}`)
          }
        }).catch(err => { throw err })
      }
    }).catch(err => { throw err })
  }).catch(err => { throw err })
}


export default facebookOAuth