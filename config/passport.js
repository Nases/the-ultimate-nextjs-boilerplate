const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

// Load user model
const User = require("../models/User");

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
              req.flash('errors', { msg: 'That email is not registered.' })
              return done(null, false);
            }
            // Check password
            bcrypt.compare(password, user.password, (err, isMatch) => {
              if (err) throw err;
              // Password matches
              if (!isMatch) {
                req.flash('errors', { msg: 'Invalid password.' })
                return done(null, false);
              }
              // Password does not match
              else {
                return done(null, user);
              }
            });
          })
          .catch(err => console.log(err));
      }
    )
  );
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};
