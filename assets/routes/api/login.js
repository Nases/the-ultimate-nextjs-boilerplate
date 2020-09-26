var router = require('express').Router()
const passport = require('passport')
const { LoginSchema } = require('../../validation/schemas')

router.post('/', (req, res, next) => {
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
      res.status(406).send('Something went wrong, please try again later.')
    })
})

module.exports = router
