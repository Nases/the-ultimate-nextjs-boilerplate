import User from '../../models/User'
import * as yup from 'yup'
import { calculateEarlierDate } from '../../../../utils/calculations'


const schema = yup.object().shape({
  email: yup
    .string()
    .min(0, 'Email must be at least 0 characters long')
    .max(200, 'Email can be maximum 200 characters long'),
  daysBefore: yup
    .number()
    .min(0, 'Days before must be at least 0')
    .max(5000, 'Days before can be maximum 5000'),
})


const countUsers = (parent, { email, daysBefore }, { req, res }, info) => {
  return req.isAuthenticated(req, ['ADMIN']).then(user => {
    return schema.validate({ email, daysBefore }).then(values => {
      return User.find(email ? { email: { $regex: email, $options: "i" } } : {})
        .countDocuments(daysBefore ? {
          registrationDate: {
            $gte: calculateEarlierDate(daysBefore)
          }
        } : {})
        .then(value => value)
        .catch(err => { throw err })
    }).catch(err => { throw err })
  })
}


export default countUsers