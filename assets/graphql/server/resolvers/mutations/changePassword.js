import { ChangePasswordSchema } from '../../../../validation/schemas'
import bcrypt from 'bcryptjs'
import User from '../../../../models/User'


const changePassword = (obj, { currentPassword, newPassword, confirmNewPassword }, { req, res }, info) => {
  return req.isAuthenticated(req, [1, 2]).then(user => {
    return ChangePasswordSchema.validate({ currentPassword, newPassword, confirmNewPassword }).then(values => {
      return bcrypt.compare(newPassword, user.password).then(isMatch => {
        if (!isMatch) {
          return bcrypt.compare(currentPassword, user.password).then(isMatch => {
            if (isMatch) {
              return bcrypt.genSalt(10).then(salt => {
                return bcrypt.hash(newPassword, salt).then(hash => {
                  return User.updateOne({ email: user.email }, { password: hash, passwordLastUpdated: Date.now() }).then(raw => {
                    return 'Password changed successfully.'
                  }).catch(err => { throw err })
                }).catch(err => { throw err })
              }).catch(err => { throw err })
            } else { throw new Error('Wrong password.') }
          }).catch(err => { throw err })
        } else { throw new Error('The new password must be different from your current one.') }
      }).catch(err => { throw err })
    }).catch(err => { throw err })
  }).catch(err => { throw err })
}


export default changePassword


// bcrypt.compare(newPassword, req.user.password).then(isMatch => {
//   if (!isMatch) {
//     bcrypt.compare(currentPassword, req.user.password).then(isMatch => {
//       if (isMatch) {
//         bcrypt.genSalt(10, (err, salt) => {
//           if (err) throw err
//           bcrypt.hash(newPassword, salt, (err, hash) => {
//             if (err) throw err
//             User.updateOne({
//               email: req.user.email
//             }, {
//               password: hash,
//               passwordLastUpdated: Date.now()
//             }, (err, raw) => {
//               if (err) throw err
//               res.send('Password changed successfully.')
//             })
//           })
//         })
//       } else {
//         res.status(406).send('Wrong password.')
//       }
//     }).catch(err => {
//       res.status(406).send('Something went wrong, please try again later.')
//     })
//   } else {
//     res.status(406).send('The new password must be different from your current one.')
//   }
// }).catch(err => {
//   res.status(406).send('Something went wrong, please try again later.')
// })

