// var router = require('express').Router()
// const User = require('../../models/User')
// const { ChangePersonalInformationSchema } = require('../../validation/schemas')


// router.post('/', (req, res) => {
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


// module.exports = router
