const express = require("express")
const router = express.Router()
const User = require("../models/User")
const bcrypt = require("bcryptjs")
const passport = require("passport")
const { check, validationResult } = require('express-validator')

// login page
router.get("/login", (req, res) => {
  res.render("login")
})

// register page
router.get("/register", (req, res) => {
  res.render("register")
})

// register handle
router.post("/register", (req, res) => {
  const { email, password1, password2 } = req.body

  // Validation pass
  User.findOne({ email }).then(user => {
    if (user) {
      // User email exists
      res.render("register", { email, password1, password2 })
    } else {
      // User email does not exist
      // Add user to mongodb
      const newUser = new User({
        email,
        password: password1
      })

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) console.log(err)
          // Set password to hashed password
          newUser.password = hash
          // Save user to mongodb
          newUser
            .save()
            .then(user => {
              req.flash(
                "success_msg",
                "You are now registered and can login.."
              )
              res.redirect("/users/login")
            })
            .catch(err => console.log(err))
        })
      })
    }
  })
})

router.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "login",
    failureFlash: true
  })(req, res, next)
})

router.get("/logout", (req, res) => {
  req.logout()
  req.flash("success_msg", "You are logged out")
  res.redirect("/users/login")
})

module.exports = router
