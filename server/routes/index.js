const express = require('express')
const router = express.Router()
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth')
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const passport = require('passport')
const { check, validationResult } = require('express-validator')
const yup = require('yup')


// sign up POST
router.post('/signup', (req, res) => {
  const { email, password, confirmPassword } = req.body

  function equalTo(ref, msg) {
    return yup.mixed().test({
      name: 'equalTo',
      exclusive: false,
      message: msg || '${path} must be the same as ${reference}',
      params: {
        reference: ref.path,
      },
      test: function (value) {
        return value === this.resolve(ref)
      },
    })
  }
  yup.addMethod(yup.string, 'equalTo', equalTo);

  const schema = yup.object().shape({
    email: yup.string()
      .email('Invalid email')
      .required('Required'),
    password: yup.string()
      .min(6, 'Password must be at least 6 characters')
      .max(24, 'Password can be maximum 24 characters')
      .required('Required'),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Required')
  })

  // check validity
  // schema.isValid({
  //   email: email,
  //   password: password,
  //   confirmPassword: confirmPassword
  // })
  //   .then(function (valid) {
  //     valid ? res.send('valid') : res.send('not valid')
  //   })

  schema.validate({
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
    });

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
