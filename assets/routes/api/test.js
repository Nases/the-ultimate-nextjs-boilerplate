const User = require('../../models/User')
var router = require('express').Router()

router.get('/', (req, res, next) => {
  User.findOne({
    email: email,
    forgotPasswordToken: forgotPasswordToken
  })
    .then(values => { console.log(value) })

  res.send('helluuuaaa')
})

module.exports = router