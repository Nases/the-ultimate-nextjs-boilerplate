const User = require('../../models/User')
var router = require('express').Router()

router.get('/', (req, res, next) => {
  User.countDocuments({}, (err, count) => { console.log(count) })

  res.send('helluuuaaa')
})

module.exports = router