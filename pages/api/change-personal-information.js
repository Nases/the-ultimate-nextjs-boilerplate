const { ChangePersonalInformationSchema } = require('../../assets/validation/schemas')
import nextConnect from 'next-connect'
import auth from '../../assets/middleware/auth'
import dbConnect from '../../assets/middleware/dbConnect'
import User from '../../assets/models/User'

const handler = nextConnect()

handler.use(auth)
handler.use((req, res) => {
  dbConnect()
  if (req.isAuthenticated()) {
    const { firstName, lastName } = req.body
    ChangePersonalInformationSchema.validate({
      firstName: firstName,
      lastName: lastName
    }).then(values => {
      User.updateOne({
        email: req.user.email
      }, {
        firstName: firstName,
        lastName: lastName
      }).then((raw, err) => {
        if (err) throw err
        res.send('Personal information successfully updated.')
      }).catch(err => {
        res.status(406).send('Something went wrong, please try again later.')
      })
    }).catch(error => {
      console.log(error)
      res.status(406).send('Something went wrong, please try again later.')
    })
  } else {
    res.status(401).send('Unauthenticated')
  }
})


export default handler