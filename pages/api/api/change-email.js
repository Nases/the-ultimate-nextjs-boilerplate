var router = require('express').Router()
const User = require('../../models/User')
const bcrypt = require('bcryptjs')
const { ChangeEmailSchema } = require('../../validation/schemas')


router.post('/', (req, res) => {
  if (req.isAuthenticated()) {
    const { email, password } = req.body
    ChangeEmailSchema.validate({
      email: email,
      password: password
    }).then(values => {
      if (email !== req.user.email) {
        User.exists({
          email: email
        })
          .then(userExists => {
            if (!userExists) {
              bcrypt.compare(password, req.user.password).then(isMatch => {
                if (isMatch) {
                  User.updateOne({
                    email: req.user.email
                  }, {
                    email: email
                  }, (err, raw) => {
                    if (err) throw err
                    res.send('Email successfully changed.')
                  })
                } else {
                  res.status(406).send('Wrong password.')
                }
              }).catch(err => {
                res.status(406).send('Something went wrong, please try again later.')
              })
            } else {
              res.status(406).send('This email is already registered.')
            }
          })
          .catch(err => {
            console.log(err)
            res.status(406).send('Something went wrong, please try again later.')
          })
      } else {
        res.status(406).send('The new e-mail address must be different from your current one.')
      }
    }).catch(error => {
      console.log(error)
      res.status(406).send('Something went wrong, please try again later.')
    })
  } else {
    res.status(401).send('Unauthenticated')
  }
})


module.exports = router
