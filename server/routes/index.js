const express = require('express')
const router = express.Router()
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth')
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const passport = require('passport')
const { check, validationResult } = require('express-validator')

// index GET
router.get('/', (req, res) => {
  res.send('hey')
})


// login POST
router.post('/login', forwardAuthenticated, [
  check('email').isEmail().withMessage('Please enter email in correct format'),
  check('password')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.')
    .isLength({ max: 50 }).withMessage('Password must be maximum 50 characters long.')
], (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    req.flash('errors', errors.errors)
  }
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true
  })(req, res, next)
})

// logout GET
router.get('/logout', (req, res) => {
  req.logout()
  req.flash('success_msg', 'You are logged out')
  res.redirect('/login')
})

// sign up POST
router.post('/signup', (req, res) => {
  const { email, password, confirmPassword } = req.body

  // res.send(JSON.stringify(req.body))

  const newUser = new User({
    email,
    password
  })
  // Save user to mongodb
  newUser.save()
    .then((user) => {
      res.send(true)
    })
    .catch(err => {
      res.send(err)
    })
})



module.exports = router
