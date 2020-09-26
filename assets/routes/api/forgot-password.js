var router = require('express').Router()
const User = require('../../models/User')
const { ForgotPasswordSchema } = require('../../validation/schemas')



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


module.exports = router
