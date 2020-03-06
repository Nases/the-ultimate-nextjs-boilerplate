const express = require("express")
const router = express.Router()
const { ensureAuthenticated } = require("../config/auth")
const User = require("../models/User")
const bcrypt = require("bcryptjs")
const passport = require("passport")
const { check, validationResult } = require('express-validator')

// index GET
router.get("/", (req, res) => {
  res.render("welcome")
})

// dashboard GET
router.get("/dashboard", ensureAuthenticated, (req, res) => {
  res.render("dashboard")
})

// login GET
router.get("/login", (req, res) => {
  res.render("login")
})
// login POST
router.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "login",
    failureFlash: true
  })(req, res, next)
})
// logout GET
router.get("/logout", (req, res) => {
  req.logout()
  req.flash("success_msg", "You are logged out")
  res.redirect("/users/login")
})

// register GET
router.get("/register", (req, res) => {
  res.render("register")
})
// register POST
router.post("/register", [
  check('email').isEmail().withMessage('Please enter email in correct format.'),
  check('password1').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.'),
  check('password1').isLength({ max: 50 }).withMessage('Password can be maximum 50 characters long.'),
  check('password1').custom((value, { req }) => {
    return (value === req.password2) ? true : false
  }).withMessage('Passwords do not match')
], (req, res) => {
  const errors = validationResult(req)
  const { email, password1, password2 } = req.body

  if (!errors.isEmpty()) {
    res.send('error')
  } else {
    res.send('no errors')
  }

  // // Validation pass
  // User.findOne({ email }).then(user => {
  //   if (user) {
  //     // User email exists
  //     res.render("register", { email, password1, password2 })
  //   } else {
  //     // User email does not exist
  //     // Add user to mongodb
  //     const newUser = new User({
  //       email,
  //       password: password1
  //     })
  //     bcrypt.genSalt(10, (err, salt) => {
  //       bcrypt.hash(newUser.password, salt, (err, hash) => {
  //         if (err) console.log(err)
  //         // Set password to hashed password
  //         newUser.password = hash
  //         // Save user to mongodb
  //         newUser
  //           .save()
  //           .then(user => {
  //             req.flash(
  //               "success_msg",
  //               "You are now registered and can login."
  //             )
  //             res.redirect("/users/login")
  //           })
  //           .catch(err => console.log(err))
  //       })
  //     })
  //   }
  // })
})



module.exports = router
