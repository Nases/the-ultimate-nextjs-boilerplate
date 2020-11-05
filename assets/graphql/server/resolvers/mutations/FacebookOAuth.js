import User from '../../models/User'
import { setUserSession } from '../../utils/auth'
import * as yup from 'yup'


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


const facebookOAuth = async (obj, { email, facebookID }, { req, res }, info) => {
  return schema.validate({ email, facebookID }).then(values => {
    // check if email is already registered normally??
    return User.findOneAndUpdate({ facebookID, email }, {}, { upsert: true, new: true }).then(user => {
      return setUserSession(res, user._id).then(() => {
        return user
      }).catch(err => { throw err })
    }).catch(err => { throw err })
  }).catch(err => { throw err })
}


export default facebookOAuth