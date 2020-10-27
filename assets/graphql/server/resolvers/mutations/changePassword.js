import { ChangePasswordSchema } from '../../../../validation/schemas'
import bcrypt from 'bcryptjs'
import dbConnect from '../../utils/dbConnect'
import User from '../../../../models/User'


const changePassword = async (obj, { currentPassword, newPassword, confirmNewPassword }, { req, res }, info) => {
  dbConnect()

  return await ChangePasswordSchema.validate({ currentPassword, newPassword, confirmNewPassword }).then(async values => {
    return await bcrypt.compare(newPassword, req.user.password).then(async isMatch => {
      if (!isMatch) {
        return await bcrypt.compare(currentPassword, req.user.password).then(async isMatch => {
          if (isMatch) {
            return await bcrypt.genSalt(10).then(async salt => {
              return await bcrypt.hash(newPassword, salt).then(async hash => {
                return await User.updateOne({ email: req.user.email }, { password: hash, passwordLastUpdated: Date.now() }).then(async raw => {
                  return 'Password changed successfully.'
                }).catch(err => { throw err })
              }).catch(err => { throw err })
            }).catch(err => { throw err })
          } else { throw new Error('Wrong password.') }
        }).catch(err => { throw err })
      } else { throw new Error('The new password must be different from your current one.') }
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

