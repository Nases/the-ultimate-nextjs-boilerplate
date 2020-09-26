var router = require('express').Router()

router.use('/test', require('./test'))
router.use('/get-user-data', require('./get-user-data'))
router.use('/log-out', require('./log-out'))
router.use('/login', require('./login'))

module.exports = router