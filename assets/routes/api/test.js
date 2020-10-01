const User = require('../../models/User')
var router = require('express').Router()

router.get('/', (req, res, next) => {
  User.find().sort({ _id: 1 }).limit(20).then(value => { res.send(value) })


})

module.exports = router