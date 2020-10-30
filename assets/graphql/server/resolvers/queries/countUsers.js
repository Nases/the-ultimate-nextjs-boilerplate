import User from '../../../../models/User'
import * as yup from 'yup'


const schema = yup.object().shape({
  email: yup
    .string()
    .min(0, 'Email must be at least 0 characters long')
    .max(200, 'Email can be maximum 200 characters long'),
})


const countUsers = async (obj, { email }, { req, res }, info) => {
  return req.isAuthenticated(req, [2]).then(user => {
    return schema.validate({ email }).then(values => {
      return User.find(email ? { email: { $regex: email, $options: "i" } } : {})
        .countDocuments()
        .then(value => value)
        .catch(err => { throw err })
    }).catch(err => { throw err })
  })
}


export default countUsers