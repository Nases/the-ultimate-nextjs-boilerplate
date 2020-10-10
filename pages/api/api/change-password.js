// var router = require('express').Router()
// const User = require('../../models/User')
// const bcrypt = require('bcryptjs')
// const { ChangePasswordSchema } = require('../../validation/schemas')



// router.post('/', (req, res) => {
//   if (req.isAuthenticated()) {
//     const { currentPassword, newPassword, confirmNewPassword } = req.body
//     ChangePasswordSchema.validate({
//       currentPassword: currentPassword,
//       newPassword: newPassword,
//       confirmNewPassword: confirmNewPassword
//     }).then(values => {
//       bcrypt.compare(newPassword, req.user.password).then(isMatch => {
//         if (!isMatch) {
//           bcrypt.compare(currentPassword, req.user.password).then(isMatch => {
//             if (isMatch) {
//               bcrypt.genSalt(10, (err, salt) => {
//                 if (err) throw err
//                 bcrypt.hash(newPassword, salt, (err, hash) => {
//                   if (err) throw err
//                   User.updateOne({
//                     email: req.user.email
//                   }, {
//                     password: hash,
//                     passwordLastUpdated: Date.now()
//                   }, (err, raw) => {
//                     if (err) throw err
//                     res.send('Password changed successfully.')
//                   })
//                 })
//               })
//             } else {
//               res.status(406).send('Wrong password.')
//             }
//           }).catch(err => {
//             res.status(406).send('Something went wrong, please try again later.')
//           })
//         } else {
//           res.status(406).send('The new password must be different from your current one.')
//         }
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


// module.exports = router
