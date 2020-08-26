const LocalStrategy = require("passport-local").Strategy
const FacebookStrategy = require('passport-facebook').Strategy
const bcrypt = require("bcryptjs")

// Load user model
const User = require("../models/User")

module.exports = passport => {
  passport.use(
    new LocalStrategy(
      { usernameField: "email", passwordField: "password", passReqToCallback: true },
      (req, email, password, done) => {
        // Match user
        User.findOne({ email: email })
          .then(user => {
            // Email does not exist
            if (!user) {
              console.log('That email is not registered.')
              return done(null, false)
            }
            // Check password
            bcrypt.compare(password, user.password, (err, isMatch) => {
              if (err) throw err
              // Password does not match
              if (!isMatch) {
                console.log('Invalid password.')
                return done(null, false)
              }
              // Password matches
              else {
                // console.log(user)
                return done(null, user)
              }
            })
          })
          .catch(err => console.log(err))
      }
    )
  )


  // get keys from env
  passport.use(new FacebookStrategy({
    clientID: 632779907666090,
    clientSecret: 'f153be7b8981ca1f24a3b854fa959f32',
    callbackURL: "http://localhost:5000/asdasd"
  },
    (accessToken, refreshToken, profile, done) => {
      // User.findOrCreate(..., function (err, user) {
      //   if (err) { return done(err); }
      //   done(null, user);
      // });
      // console.log(accessToken)
      // console.log(refreshToken)
      console.log(profile)
      // done(null, profile)
      // done(null, { 'profile': 'asd' })
    }
  ))










  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user)
    })
  })
}