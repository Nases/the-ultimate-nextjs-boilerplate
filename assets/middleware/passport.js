import passport from 'passport'
import LocalStrategy from 'passport-local'
const User = require("../models/User")
const bcrypt = require("bcryptjs")


// import { findUserByUsername } from './db'

export function findUserByUsername(req, username) {
  // Here you find the user based on id/username in the database
  // const user = await db.findUserById(id)
  return req.session.users.find((user) => user.username === username)
}

// passport.serializeUser(function (user, done) {
//   // serialize the username into session
//   done(null, user.username)
// })

// passport.deserializeUser(function (req, id, done) {
//   // deserialize the username back into user object
//   const user = findUserByUsername(req, id)
//   done(null, user)
// })

passport.serializeUser((user, done) => {
  console.log(`serialize user called with user: ${user.id}`)
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  console.log(`deserialize user called with id: ${id}`)
  User.findById(id, (err, user) => {
    done(err, user)
  })
})


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

// passport.use(
//   new LocalStrategy(
//     { passReqToCallback: true },
//     (req, username, password, done) => {
//       // Here you lookup the user in your DB and compare the password/hashed password
//       const user = findUserByUsername(req, username)
//       console.log('passport local stretegy called')
//       // Security-wise, if you hashed the password earlier, you must verify it
//       // if (!user || await argon2.verify(user.password, password))
//       if (!user || user.password !== password) {
//         done(null, null)
//       } else {
//         done(null, user)
//       }
//     }
//   )
// )

export default passport
