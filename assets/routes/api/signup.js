var router = require('express').Router()
const User = require('../../models/User')
const bcrypt = require('bcryptjs')
const { SignUpSchema } = require('../../validation/schemas')


router.post('/', (req, res) => {
  const { email, password, confirmPassword } = req.body

  SignUpSchema.validate({
    email: email,
    password: password,
    confirmPassword: confirmPassword
  })
    .then(values => {
      User.exists({ email }, (err, exists) => {
        if (exists) {
          // User email exists
          res.status(406).send('This email is already registered.')
        } else {
          // User email does not exist
          bcrypt.genSalt(10, (err, salt) => {
            if (err) throw err
            bcrypt.hash(password, salt, (err, hash) => {
              if (err) throw err
              const newUser = new User({
                email,
                password: hash
              })
              // Save user to mongodb
              newUser.save()
                .then(user => {
                  req.logIn(user, err => {
                    if (err) throw error
                    res.send(user)
                  })
                })
                .catch(err => {
                  throw err
                })
            })
          })
        }
      })
    })
    .catch(err => {
      res.status(406).send('Something went wrong, please try again later.')
    })
})

module.exports = router
