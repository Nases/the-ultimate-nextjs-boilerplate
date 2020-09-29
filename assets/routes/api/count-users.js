const User = require('../../models/User')
var router = require('express').Router()
const { calculateEarlierDate } = require('../../utils/calculations')


router.get('/', (req, res) => {
  User.countDocuments({}, (err, count) => { res.send(count.toString()) })
})

router.get('/last-7-days', (req, res) => {
  User.countDocuments({
    registrationDate: {
      $gte: calculateEarlierDate(7)
    }
  }, (err, count) => { res.send(count.toString()) })
})

router.get('/last-30-days', (req, res) => {
  User.countDocuments({
    registrationDate: {
      $gte: calculateEarlierDate(30)
    }
  }, (err, count) => { res.send(count.toString()) })
})

router.get('/last-60-days', (req, res) => {
  User.countDocuments({
    registrationDate: {
      $gte: calculateEarlierDate(60)
    }
  }, (err, count) => { res.send(count.toString()) })
})

router.get('/last-180-days', (req, res) => {
  User.countDocuments({
    registrationDate: {
      $gte: calculateEarlierDate(180)
    }
  }, (err, count) => { res.send(count.toString()) })
})

router.get('/last-360-days', (req, res) => {
  User.countDocuments({
    registrationDate: {
      $gte: calculateEarlierDate(360)
    }
  }, (err, count) => { res.send(count.toString()) })
})

module.exports = router