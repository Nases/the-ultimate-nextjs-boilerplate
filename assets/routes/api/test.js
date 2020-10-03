const User = require('../../models/User')
var router = require('express').Router()

router.get('/', (req, res, next) => {
  User
    .countDocuments()
    .then(value => res.send(String(value)))
    .catch(err => res.send(err))


})

module.exports = router