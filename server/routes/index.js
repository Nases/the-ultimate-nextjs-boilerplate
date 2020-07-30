const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { SignUpSchema, LoginSchema, ChangePasswordSchema, ForgotPasswordSchema } = require('../assets/validation/schemas')
const bcrypt = require('bcryptjs')
const passport = require('passport')


// ensure auth
router.use('/get-user-data', (req, res) => {
  if (req.isAuthenticated()) {
    res.send(req.user)
  } else {
    res.status(401).send('Unauthenticated')
  }
})

router.use('/user', (req, res) => {
  console.log(req.session)
  res.send(req.user)
})

router.use('/sign-out', (req, res) => {
  req.session.destroy(error => {
    if (error) throw error
    res.send(true)
  })
})

router.post('/login', (req, res, next) => {
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

router.post('/signup', (req, res) => {
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

router.post('/change-password', (req, res) => {
  if (req.isAuthenticated()) {
    const { currentPassword, newPassword, confirmNewPassword } = req.body
    ChangePasswordSchema.validate({
      currentPassword: currentPassword,
      newPassword: newPassword,
      confirmNewPassword: confirmNewPassword
    }).then(values => {
      bcrypt.compare(currentPassword, req.user.password).then(isMatch => {
        if (isMatch) {
          bcrypt.genSalt(10, (err, salt) => {
            if (err) throw err
            bcrypt.hash(newPassword, salt, (err, hash) => {
              if (err) throw err
              User.updateOne({
                email: req.user.email
              }, {
                password: hash,
                passwordLastUpdated: Date.now()
              }, (err, raw) => {
                if (err) throw err
                res.send('Password changed successfully.')
              })
            })
          })
        } else {
          res.status(406).send('Wrong password.')
        }
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

router.post('/forgot-password', (req, res) => {
  const { email } = req.body

  ForgotPasswordSchema.validate({
    email: email
  })
    .then(values => {
      User.exists({ email }, (err, exists) => {
        if (!exists) {
          // User email does not exist
          res.status(406).send('This email is not registered.')
        } else {
          // User email exists
          const crypto = require('crypto')

          crypto.randomBytes(64, (err, buffer) => {
            if (err) throw err
            var randomToken = buffer.toString('hex')
            User.updateOne({
              email: email
            }, {
              forgotPasswordToken: randomToken
            }, (err, raw) => {
              if (err) throw err

              const { sendMail } = require('../assets/mailer')
              sendMail({
                to: email,
                subject: "Password Recovery",
                text: 'Please use the link to recover your password: ',
                html: "<b>Hello world?</b>",
              })
                .then(() => console.log('yey email sent'))
                .catch(err => console.log(err))

              res.send('weeeee forgot password progresssssss')


            })



          })
        }
      })
    })
    .catch(err => {
      res.status(406).send('Something went wrong, please try again later.')
    })
})


router.post('/test', (req, res) => {
  res.send(process.env.NODE_ENV)
})












module.exports = router
