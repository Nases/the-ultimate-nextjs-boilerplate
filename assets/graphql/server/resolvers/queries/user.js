import User from '../../models/User'
import * as yup from 'yup'


const schema = yup.object().shape({
  id: yup
    .string()
    .required()
    .min(1, 'ID must be at least 1 character long')
    .max(100, 'ID can be maximum 100 character long')
})


const user = (parent, { id }, { req, res }, info) => {
  return req.isAuthenticated(req, ['ADMIN']).then(user => {
    return schema.validate({ id }).then(values => {
      return User.find({ _id: id })
        .then(value => value[0])
        .catch(err => { throw err })
    }).catch(err => { throw err })
  }).catch(err => { throw err })
}


export default user






