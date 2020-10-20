import dbConnect from '../middleware/dbConnect'
import User, { UserSchema } from '../models/User'

import { setUserSession, getUserSession } from './auth'
import { removeSessionTokenCookie } from './auth-cookies'

export const resolvers = {
  Query: {
    test(obj, args, context, info) {
      // dbConnect()
      return User.find({ email: 'qwe@qwe.qwe' }).then(value => {
        console.log(value[0])
        return (
          value[0]
        )
      })
    },
    user(obj, { id }, context, info) {
      // dbConnect()
      return User.find({ _id: id }).then(value => {
        return (
          value[0]
        )
      }).catch(err => {
        throw new Error('Boy something went wrong.')
      })
    },
    users(obj, args, context, info) {
      // dbConnect()
      return User.find().then(value => {
        return (
          value
        )
      })
    },
    async getUserData(obj, args, context, info) {
      try {
        const session = await getUserSession(context.req)
        if (session) {
          return JSON.stringify(session)
        }
      } catch {
        return new Error('getUserData error!')
      }
    },
    async setUserData(obj, args, context, info) {
      await setUserSession(context.res, '5f606c4be7788e07f0d23efd')
      return 'User session might be set. Check cookie session-token cookie.'
    },
    logOut(obj, args, context, info) {
      return (
        removeSessionTokenCookie(context.res).then(() => {
          return (
            'Logged out.'
          )
        }).catch(err => {
          return (
            'Something went wrong logging out, please try again later.'
          )
        })
      )
    }
  },
  Mutation: {
    async signUp(obj, args, context, info) {
      const { SignUpSchema } = require('../validation/schemas')
      const bcrypt = require('bcryptjs')
      const { email, password, confirmPassword } = args

      return SignUpSchema.validate({
        email: email,
        password: password,
        confirmPassword: confirmPassword
      })
        .then(async function (values) {
          User.exists({ email }, (err, exists) => {
            console.log('3')
            if (exists) {
              // User email exists
              console.log('This email is already registered.')
              // throw new Error('This email is already registered.')
            } else {
              // User email does not exist
              bcrypt.genSalt(10, (err, salt) => {
                if (err) throw err
                bcrypt.hash(password, salt, (err, hash) => {
                  if (err) throw err
                  const newUser = new User({
                    email,
                    password: hash
                  })
                  // Save user to mongodb
                  newUser.save()
                    .then(user => {
                      console.log('something is happening')
                      setUserSession(context.res, user._id)
                      return user
                      // req.logIn(user, err => {
                      //   if (err) throw err
                      //   res.send(user)
                      // })
                    })
                    .catch(err => {
                      throw err
                    })
                })
              })
            }
          })
        })
        .catch(err => {
          console.log('fail?')
          throw err
        })
    }
  },
}