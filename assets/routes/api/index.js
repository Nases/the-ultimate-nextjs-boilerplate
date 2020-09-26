var router = require('express').Router()

router.use('/test', require('./test'))
router.use('/get-user-data', require('./get-user-data'))
router.use('/log-out', require('./log-out'))
router.use('/login', require('./login'))
router.use('/signup', require('./signup'))
router.use('/change-password', require('./change-password'))
router.use('/change-email', require('./change-email'))
router.use('/forgot-password', require('./forgot-password'))

module.exports = router