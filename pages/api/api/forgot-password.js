var router = require('express').Router()
const User = require('../../models/User')
const bcrypt = require('bcryptjs')
const {
  ForgotPasswordSchema,
  ForgotPasswordChangePasswordSchema,
  ForgotPasswordChangePasswordEnsureSchema,
  ChangePasswordSchema
} = require('../../validation/schemas')


router.post('/', (req, res) => {
  const { email } = req.body

  ForgotPasswordSchema.validate({
    email: email
  })
    .then(values => {
      User.exists({ email }, (err, exists) => {
        if (!exists) { // User email does not exist
          res.status(406).send('This email is not registered.')
        } else { // User email exists
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

              const { sendMail } = require('../../utils/mailer')
              const companyInfo = require('../../company-info')
              const recoveryLink = `${companyInfo.clientURI}forgot-password?email=${email}&forgotPasswordToken=${randomToken}`
              sendMail({
                to: email,
                subject: "Password Recovery",
                text: 'Please use the link to recover your password: ' + recoveryLink,
                html: 'Please use the link to recover your password: ' + recoveryLink,
              })
                .then(() => {
                  res.send('Recovery email sent, please check you email.')
                })
                .catch(err => {
                  console.log(err)
                  res.status(406).send('Something went wrong, please try again later.')
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
  const { email, forgotPasswordToken, newPassword, confirmNewPassword } = req.body

  ForgotPasswordChangePasswordEnsureSchema.validate({
    email: email,
    forgotPasswordToken: forgotPasswordToken
  })
    .then((values) => {
      User.findOne({
        email: email,
        forgotPasswordToken: forgotPasswordToken
      })
        .then(values => {
          if (values) {
            ForgotPasswordChangePasswordSchema.validate({
              newPassword: newPassword,
              confirmNewPassword: confirmNewPassword
            }).then(values => {
              bcrypt.genSalt(10, (err, salt) => {
                if (err) throw err
                bcrypt.hash(newPassword, salt, (err, hash) => {
                  if (err) throw err
                  User.updateOne({
                    email: email
                  }, {
                    password: hash,
                    passwordLastUpdated: Date.now(),
                    forgotPasswordToken: null
                  }, (err, raw) => {
                    if (err) throw err
                    res.send('Password changed successfully.')
                  })
                })
              })
            }).catch(error => {
              console.log(error)
              res.status(406).send('Something went wrong, please try again later.')
            })
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


router.post('/ensure-change-password', (req, res) => {
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
