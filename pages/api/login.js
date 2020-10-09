const passport = require('passport')
const { LoginSchema } = require('../../assets/validation/schemas')
import nextConnect from 'next-connect'
import auth from '../../assets/middleware/auth'
import dbConnect from '../../assets/middleware/dbConnect'


const handler = nextConnect()

handler.use(auth)
handler.use((req, res, next) => {
  dbConnect()
  const { email, password } = req.body

  LoginSchema.validate({
    email: email,
    password: password
  })
    .then(values => {
      passport.authenticate('local', (err, user, info) => {
        if (err) throw err
        if (!user) {
          res.status(406).send('Email or password is wrong.')
        } else {
          req.logIn(user, err => {
            if (err) throw err
            res.send(user)
          })
        }
      })(req, res, next)
    })
    .catch(err => {
      console.log(err)
      res.status(406).send('Something went wrong, please try again later.')
    })
})


export default handler