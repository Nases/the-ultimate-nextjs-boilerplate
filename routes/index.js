const express = require('express')
const router = express.Router()
const { ensureAuthenticated } = require('../config/auth')
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const passport = require('passport')
const { check, validationResult } = require('express-validator')

// index GET
router.get('/', (req, res) => {
  res.render('welcome')
})

// dashboard GET
router.get('/dashboard', ensureAuthenticated, (req, res) => {
  res.render('dashboard')
})

// login GET
router.get('/login', (req, res) => {
  res.render('login')
})
// login POST
router.post('/login', [
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
    failureRedirect: 'login',
    failureFlash: true
  })(req, res, next)
})
// logout GET
router.get('/logout', (req, res) => {
  req.logout()
  req.flash('success_msg', 'You are logged out')
  res.redirect('/login')
})

// register GET
router.get('/register', (req, res) => {
  res.render('register')
})
// register POST
router.post('/register', [
  check('email').isEmail().withMessage('Please enter email in correct format.'),
  check('password1')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.')
    .isLength({ max: 50 }).withMessage('Password can be maximum 50 characters long.')
    .custom((value, { req }) => {
      return (value === req.body.password2) ? true : false
    }).withMessage('Passwords do not match')
], (req, res) => {
  const errors = validationResult(req)
  const { email, password1, password2 } = req.body

  if (!errors.isEmpty()) {
    req.flash('errors', errors.errors)
    res.redirect('/register')
  } else {
    // Validation pass
    User.exists({ email }, (err, exists) => {
      if (exists) {
        // User email exists
        req.flash('errors', { msg: 'User email exists' })
        res.redirect('register')
      } else {
        // User email does not exist
        bcrypt.genSalt(10, (err, salt) => {
          if (err) throw err
          bcrypt.hash(password1, salt, (err, hash) => {
            if (err) console.log(err)
            const newUser = new User({
              email,
              password: hash
            })
            // Save user to mongodb
            newUser.save()
              .then(user => {
                req.flash('success', { msg: 'Successfully registered. You can now login.' })
                res.redirect('/login')
              })
              .catch(err => console.log(err))
          })
        })
      }
    })
  }


})



module.exports = router
