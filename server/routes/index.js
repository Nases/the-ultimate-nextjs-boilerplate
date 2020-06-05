const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { check, validationResult } = require('express-validator')
const { SignupSchema } = require('../assets/validation/schemas')



// sign up POST
router.post('/signup', (req, res) => {
  const { email, password, confirmPassword } = req.body

  SignupSchema.validate({
    email: email,
    password: password,
    confirmPassword: confirmPassword
  })
    .then(values => {
      res.send(values)
    })
    .catch(function (err) {
      res.send(err.errors)
      // err.name // => 'ValidationError'
      // err.errors // => ['Deve ser maior que 18']
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
