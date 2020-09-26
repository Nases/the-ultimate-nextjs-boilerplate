var router = require('express').Router()
const User = require('../../models/User')
const { ForgotPasswordChangePasswordEnsureSchema } = require('../../validation/schemas')


router.post('/', (req, res) => {
  const { email, forgotPasswordToken } = req.body
  ForgotPasswordChangePasswordEnsureSchema.validate({
    email: email,
    forgotPasswordToken: forgotPasswordToken
  })
    .then((values) => {
      if (forgotPasswordToken === null) console.log('forgotPasswordToken is null')
      User.exists({
        email: email,
        forgotPasswordToken: forgotPasswordToken
      })
        .then(exists => {
          if (exists) {
            console.log(values)
            res.send(values)
          } else {
            res.status(406).send('Given email and Forgot Password Token does not match.')
          }
        })
        .catch(err => {
          if (err) throw err
        })
    })
    .catch(err => {
      console.log(err)
      res.status(406).send('Something went wrong, please try again later.')
    })
})


module.exports = router
