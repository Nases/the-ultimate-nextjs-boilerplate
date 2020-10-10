const yup = require('yup')
import nextConnect from 'next-connect'
import auth from '../../../assets/middleware/auth'
import dbConnect from '../../../assets/middleware/dbConnect'
import User from '../../../assets/models/User'


const handler = nextConnect()
handler.use(auth)
handler.use((req, res) => {
  dbConnect()
  var { email } = req.query

  const schema = yup.object().shape({
    email: yup
      .string()
      .min(0, 'Email must be at least 0 characters long')
      .max(200, 'Email can be maximum 200 characters long'),
  })

  schema.validate({
    email: email
  })
    .then(values => {
      User.find(email ? { email: { $regex: email, $options: "i" } } : {})
        .countDocuments()
        .then(value => res.send(String(value)))
        .catch(err => res.send(err))
    })
    .catch(err => res.send(err.errors))
})


export default handler