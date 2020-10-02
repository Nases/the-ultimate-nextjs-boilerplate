const User = require('../../models/User')
var router = require('express').Router()

router.get('/', (req, res, next) => {
  const { id } = req.query
  User.find({
    id: id
  })
    .then(value => { res.send(value) })
    .catch(err => req.send(err))


})

module.exports = router