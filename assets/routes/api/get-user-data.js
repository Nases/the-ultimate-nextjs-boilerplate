var router = require('express').Router()

router.use('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.send(req.user)
  } else {
    res.status(401).send('Unauthenticated')
  }
})

module.exports = router
