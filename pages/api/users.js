const { calculateEarlierDate } = require('../../assets/utils/calculations')
const yup = require('yup')
import nextConnect from 'next-connect'
import auth from '../../assets/middleware/auth'
import dbConnect from '../../assets/middleware/dbConnect'
import User from '../../assets/models/User'


const handler = nextConnect()

handler.use(auth)
handler.use((req, res) => {
  dbConnect()

  var { limit, sort, skip, email } = req.query

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

  schema.validate({
    limit: limit,
    sort: sort,
    skip: skip,
    email: email
  })
    .then(values => {
      User.find(email ? { email: { $regex: email, $options: "i" } } : {})
        .sort({ _id: (sort === 'asc' ? -1 : 1) })
        .skip(values.skip || 0)
        .limit(values.limit || 20)
        .then(value => res.send(value))
        .catch(err => res.send(err))
    })
    .catch(err => res.send(err.errors))
})



const lastDaysAllowed = [7, 30, 60, 180, 360]

lastDaysAllowed.map(value => {
  return (
    handler.use(`/count/last-${value}-days`, (req, res) => {
      User.countDocuments({
        registrationDate: {
          $gte: calculateEarlierDate(value)
        }
      }, (err, count) => { res.send(count.toString()) })
    })
  )
})



export default handler
