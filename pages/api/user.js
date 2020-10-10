const yup = require('yup')
import nextConnect from 'next-connect'
import auth from '../../assets/middleware/auth'
import dbConnect from '../../assets/middleware/dbConnect'
import User from '../../assets/models/User'

const handler = nextConnect()

handler.use(auth)
handler.use((req, res) => {
  dbConnect()
  var { id } = req.query

  const schema = yup.object().shape({
    id: yup
      .string()
      .required()
      .min(1, 'ID must be at least 1 character long')
      .max(100, 'ID can be maximum 100 character long')
  })

  schema.validate({
    id: id
  })
    .then(values => {
      User.find({
        _id: id
      })
        .then(value => { res.send(value) })
        .catch(err => res.send(err))
    })
    .catch(err => res.send(err.errors))


})


export default handler