const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Load user model
const User = require("../models/User");

module.exports = passport => {
  passport.use(
    new LocalStrategy(
      { usernameField: "email", passwordField: "password" },
      (email, password, done) => {
        // Match user
        User.findOne({ email: email })
          .then(user => {
            // Email does not exist
            if (!user) {
              return done(null, false, {
                message: "That email is not registered"
              });
            }
            // Check password
            bcrypt.compare(password, user.password, (err, isMatch) => {
              if (err) throw err;
              // Password matches
              if (isMatch) {
                return done(null, user);
              }
              // Password does not match
              else {
                return done(null, false, { message: "Password is incorrect" });
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
