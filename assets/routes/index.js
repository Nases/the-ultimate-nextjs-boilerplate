const router = require('express').Router()
const User = require('../models/User')
const {
  ChangePasswordSchema,
  ChangePersonalInformationSchema,
  ForgotPasswordSchema,
  ForgotPasswordChangePasswordEnsureSchema
} = require('../validation/schemas')
const bcrypt = require('bcryptjs')
const passport = require('passport')








// router.post('/forgot-password', (req, res) => {
//   const { email } = req.body

//   ForgotPasswordSchema.validate({
//     email: email
//   })
//     .then(values => {
//       User.exists({ email }, (err, exists) => {
//         if (!exists) { // User email does not exist
//           res.status(406).send('This email is not registered.')
//         } else { // User email exists
//           const crypto = require('crypto')

//           crypto.randomBytes(64, (err, buffer) => {
//             if (err) throw err
//             var randomToken = buffer.toString('hex')
//             User.updateOne({
//               email: email
//             }, {
//               forgotPasswordToken: randomToken
//             }, (err, raw) => {
//               if (err) throw err

//               const { sendMail } = require('../assets/mailer')
//               const { companyInfo } = require('../assets/company-info')
//               const recoveryLink = `${companyInfo.clientURI}forgot-password?email=${email}&forgotPasswordToken=${randomToken}`
//               sendMail({
//                 to: email,
//                 subject: "Password Recovery",
//                 text: 'Please use the link to recover your password: ' + recoveryLink,
//                 html: 'Please use the link to recover your password: ' + recoveryLink,
//               })
//                 .then(() => {
//                   res.send('Recovery email sent, please check you email.')
//                 })
//                 .catch(err => {
//                   console.log(err)
//                   res.status(406).send('Something went wrong, please try again later.')
//                 })
//             })
//           })
//         }
//       })
//     })
//     .catch(err => {
//       res.status(406).send('Something went wrong, please try again later.')
//     })
// })


// router.post('/forgot-password-change-password', (req, res) => {
//   const { email, forgotPasswordToken, currentPassword, newPassword, confirmNewPassword } = req.body

//   ForgotPasswordChangePasswordEnsureSchema.validate({
//     email: email,
//     forgotPasswordToken: forgotPasswordToken
//   })
//     .then((values) => {
//       User.findOne({
//         email: email,
//         forgotPasswordToken: forgotPasswordToken
//       })
//         .then(values => {
//           if (values) {
//             const userPassword = values.password
//             ChangePasswordSchema.validate({
//               currentPassword: currentPassword,
//               newPassword: newPassword,
//               confirmNewPassword: confirmNewPassword
//             }).then(values => {
//               bcrypt.compare(currentPassword, userPassword).then(isMatch => {
//                 console.log(userPassword)
//                 console.log(currentPassword)
//                 if (isMatch) {
//                   bcrypt.genSalt(10, (err, salt) => {
//                     if (err) throw err
//                     bcrypt.hash(newPassword, salt, (err, hash) => {
//                       if (err) throw err
//                       User.updateOne({
//                         email: email
//                       }, {
//                         password: hash,
//                         passwordLastUpdated: Date.now(),
//                         forgotPasswordToken: null
//                       }, (err, raw) => {
//                         if (err) throw err
//                         res.send('Password changed successfully.')
//                       })
//                     })
//                   })
//                 } else {
//                   res.status(406).send('Wrong password.')
//                 }
//               }).catch(err => {
//                 res.status(406).send('Something went wrong, please try again later.')
//               })
//             }).catch(error => {
//               console.log(error)
//               res.status(406).send('Something went wrong, please try again later.')
//             })
//           } else {
//             res.status(406).send('Given email and Forgot Password Token does not match.')
//           }
//         })
//         .catch(err => {
//           if (err) throw err
//         })
//     })
//     .catch(err => {
//       console.log(err)
//       res.status(406).send('Something went wrong, please try again later.')
//     })
// })


// router.post('/change-personal-information', (req, res) => {
//   if (req.isAuthenticated()) {
//     const { firstName, lastName } = req.body
//     ChangePersonalInformationSchema.validate({
//       firstName: firstName,
//       lastName: lastName
//     }).then(values => {
//       User.updateOne({
//         email: req.user.email
//       }, {
//         firstName: firstName,
//         lastName: lastName
//       }).then((raw, err) => {
//         if (err) throw err
//         res.send('Personal information successfully updated.')
//       }).catch(err => {
//         res.status(406).send('Something went wrong, please try again later.')
//       })
//     }).catch(error => {
//       console.log(error)
//       res.status(406).send('Something went wrong, please try again later.')
//     })
//   } else {
//     res.status(401).send('Unauthenticated')
//   }
// })


// router.post('/ensure-forgot-password-change-password', (req, res) => {
//   const { email, forgotPasswordToken } = req.body
//   ForgotPasswordChangePasswordEnsureSchema.validate({
//     email: email,
//     forgotPasswordToken: forgotPasswordToken
//   })
//     .then((values) => {
//       if (forgotPasswordToken === null) console.log('forgotPasswordToken is null')
//       User.exists({
//         email: email,
//         forgotPasswordToken: forgotPasswordToken
//       })
//         .then(exists => {
//           if (exists) {
//             console.log(values)
//             res.send(values)
//           } else {
//             res.status(406).send('Given email and Forgot Password Token does not match.')
//           }
//         })
//         .catch(err => {
//           if (err) throw err
//         })
//     })
//     .catch(err => {
//       console.log(err)
//       res.status(406).send('Something went wrong, please try again later.')
//     })
// })


// router.get('/callback', (req, res) => passport.authenticate('facebook', {
//   successRedirect: '/success',
//   failureRedirect: '/fail'
// }))



router.use('/', require('./api/index'))






module.exports = router
