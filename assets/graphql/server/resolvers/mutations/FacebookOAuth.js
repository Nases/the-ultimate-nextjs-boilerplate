import { SignUpSchema } from '../../../../validation/schemas'
import bcrypt from 'bcryptjs'
import User from '../../models/User'
import { setUserSession } from '../../utils/auth'
import * as yup from 'yup'
import mongoose from 'mongoose'


const schema = yup.object().shape({
  email: yup
    .string()
    .required()
    .min(0, 'Email must be at least 0 characters long')
    .max(200, 'Email can be maximum 200 characters long'),
  id: yup
    .string()
    .required()
    .min(1, 'Id must be at least 1')
    .max(1000, 'Id can be maximum 1000')
})


const FacebookOAuth = async (obj, { email, id }, { req, res }, info) => {
  return schema.validate({ email, id }).then(values => {

    // id = mongoose.Types.ObjectId(id)
    return User.findOneAndUpdate({ _id: id, email }, {}, { upsert: true }).then(user => {


      return setUserSession(res, user._id).then(() => {
        return user
      }).catch(err => { throw err })


    }).catch(err => { throw err })



  }).catch(err => { throw err })
}


export default FacebookOAuth