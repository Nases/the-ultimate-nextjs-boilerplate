import dbConnect from '../utils/dbConnect'
import User, { UserSchema } from '../../../models/User'
import { setUserSession, getUserSession } from '../utils/auth'
import { removeSessionTokenCookie } from '../utils/auth-cookies'

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
          return session
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
          return ('Logged out.')
        }).catch(err => { throw err })
      )
    }
  },
  Mutation: {
    async signUp(obj, { email, password, confirmPassword }, { req, res }, info) {
      const { SignUpSchema } = require('../../../validation/schemas')
      const bcrypt = require('bcryptjs')
      dbConnect()

      return await SignUpSchema.validate({ email, password, confirmPassword }).then(async values => {
        return await User.exists({ email }).then(async exists => {
          if (!exists) {
            return await bcrypt.genSalt(10).then(async salt => {
              return await bcrypt.hash(password, salt).then(async hash => {
                return await User({ email, password: hash }).save().then(async user => {
                  return await setUserSession(res, user._id).then(async () => {
                    return user
                  }).catch(err => { throw err })
                }).catch(err => { throw err })
              }).catch(err => { throw err })
            }).catch(err => { throw err })
          } else { throw new Error('This email is already registered.') }
        }).catch(err => { throw err })
      }).catch(err => { throw err })
    }
  },
}