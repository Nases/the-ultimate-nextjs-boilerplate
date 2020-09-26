var router = require('express').Router()

router.use('/test', require('./test'))
router.use('/get-user-data', require('./get-user-data'))
router.use('/log-out', require('./log-out'))
router.use('/login', require('./login'))
router.use('/signup', require('./signup'))
router.use('/change-password', require('./change-password'))
router.use('/change-email', require('./change-email'))
router.use('/change-personal-information', require('./change-personal-information'))

router.use('/forgot-password', require('./forgot-password'))
router.use('/forgot-password-change-password', require('./forgot-password-change-password'))
router.use('/ensure-forgot-password-change-password', require('./ensure-forgot-password-change-password'))


module.exports = router