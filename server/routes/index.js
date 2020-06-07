const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { check, validationResult } = require('express-validator')
const { SignUpSchema, LoginSchema } = require('../assets/validation/schemas')

// login POST
router.post('/login', (req, res) => {
  const { email, password } = req.body

  LoginSchema.validate({
    email: email,
    password: password
  })
    .then(values => {
      res.send(values)
    })
    .catch(err => {
      res.status(406).send('Something went wrong, please try again later.')
    })
})

// sign up POST
router.post('/signup', (req, res) => {
  const { email, password, confirmPassword } = req.body

  SignUpSchema.validate({
    email: email,
    password: password,
    confirmPassword: confirmPassword
  })
    .then(values => {
      res.send(values)
    })
    .catch(err => {
      res.status(406).send('Something went wrong, please try again later.')
    })

  // const newUser = new User({
  //   email,
  //   password
  // })
  // // Save user to mongodb
  // newUser.save()
  //   .then((user) => {
  //     res.send(true)
  //   })
  //   .catch(err => {
  //     res.send(err)
  //   })
})



module.exports = router
