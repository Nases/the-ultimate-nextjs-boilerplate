var router = require('express').Router()
const User = require('../../models/User')
const { ForgotPasswordChangePasswordEnsureSchema } = require('../../validation/schemas')



router.post('/', (req, res) => {
  const { email, forgotPasswordToken, currentPassword, newPassword, confirmNewPassword } = req.body

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
            const userPassword = values.password
            ChangePasswordSchema.validate({
              currentPassword: currentPassword,
              newPassword: newPassword,
              confirmNewPassword: confirmNewPassword
            }).then(values => {
              bcrypt.compare(currentPassword, userPassword).then(isMatch => {
                console.log(userPassword)
                console.log(currentPassword)
                if (isMatch) {
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
