const bcrypt = require('bcryptjs')
const { ChangePasswordSchema } = require('../../assets/validation/schemas')
import nextConnect from 'next-connect'
import auth from '../../assets/middleware/auth'
import dbConnect from '../../assets/middleware/dbConnect'
import User from '../../assets/models/User'

const handler = nextConnect()

handler.use(auth)
handler.use((req, res) => {
  dbConnect()
  if (req.isAuthenticated()) {
    const { currentPassword, newPassword, confirmNewPassword } = req.body
    ChangePasswordSchema.validate({
      currentPassword: currentPassword,
      newPassword: newPassword,
      confirmNewPassword: confirmNewPassword
    }).then(values => {
      bcrypt.compare(newPassword, req.user.password).then(isMatch => {
        if (!isMatch) {
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
        } else {
          res.status(406).send('The new password must be different from your current one.')
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


export default handler