const User = require('../../models/User')
var router = require('express').Router()

router.get('/', (req, res, next) => {
  User.find({ email: { $regex: "qwe", $options: "i" } }).then(value => res.send(value)).catch(err => res.send(err))


})

module.exports = router