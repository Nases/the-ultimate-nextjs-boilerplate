import User from '../../models/User'
import * as yup from 'yup'


const schema = yup.object().shape({
  limit: yup
    .number()
    .min(1, 'Limit must be at least 1')
    .max(1000, 'Limit can be maximum 1000'),
  sort: yup
    .string()
    .matches(/(asc|desc)/, { excludeEmptyString: true }),
  skip: yup
    .number()
    .min(0, 'Skip must be at least 0')
    .max(99999999, 'Skip can be maximum 99999999'),
  email: yup
    .string()
    .min(0, 'Email must be at least 0 characters long')
    .max(200, 'Email can be maximum 200 characters long'),
})


const users = (parent, { limit, sort, skip, email }, { req, res }, info) => {
  return req.isAuthenticated(req, ['ADMIN']).then(user => {
    return schema.validate({ limit, sort, skip, email }).then(values => {
      return User.find(email ? { email: { $regex: email, $options: "i" } } : {})
        .sort({ _id: (sort === 'asc' ? -1 : 1) })
        .skip(values.skip || 0)
        .limit(values.limit || 20)
        .then(value => value)
        .catch(err => { throw err })
    }).catch(err => { throw err })
  })
}


export default users