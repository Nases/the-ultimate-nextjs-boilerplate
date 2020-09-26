var router = require('express').Router()

router.use('/', (req, res) => {
  req.session.destroy(error => {
    if (error) throw error
    res.send(true)
  })
})

module.exports = router
