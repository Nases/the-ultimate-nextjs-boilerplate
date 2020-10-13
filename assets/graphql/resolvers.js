// import { AuthenticationError, UserInputError } from 'apollo-server-micro'
// import { createUser, findUser, validatePassword } from '../lib/user'
// import { setLoginSession, getLoginSession } from '../lib/auth'
// import { removeTokenCookie } from '../lib/auth-cookies'

import dbConnect from '../middleware/dbConnect'
import User, { UserSchema } from '../models/User'


export const resolvers = {
  Query: {
    test(obj, args, context, info) {
      dbConnect()
      return User.find({ email: 'qwe@qwe.qwe' }).then(value => {
        console.log(value[0])
        return (
          value[0]
        )
      })
    },
    user(obj, { id }, context, info) {
      dbConnect()
      return User.find({ _id: id }).then(value => {
        return (
          value[0]
        )
      }).catch(err => {
        throw new Error('Boy something went wrong.')
      })
    },
    users(obj, args, context, info) {
      dbConnect()
      return User.find().then(value => {
        return (
          value
        )
      })
    },
    // async viewer(_parent, _args, context, _info) {
    //   try {
    //     const session = await getLoginSession(context.req)

    //     if (session) {
    //       return findUser({ email: session.email })
    //     }
    //   } catch (error) {
    //     throw new AuthenticationError(
    //       'Authentication token is invalid, please log in'
    //     )
    //   }
    // },
  },
  Mutation: {
    async signUp(obj, args, context, info) {
      const user = await User.find({ _id: "5f626c1a86496b2154ea66ab" }).then(value => {
        return (
          value[0]
        )
      }).catch(err => { throw err })
      console.log(args)

      return user
    }
    // async signUp(_parent, args, _context, _info) {
    //   const user = await createUser(args.input)
    //   return { user }
    // },
    // async signIn(_parent, args, context, _info) {
    //   const user = await findUser({ email: args.input.email })

    //   if (user && (await validatePassword(user, args.input.password))) {
    //     const session = {
    //       id: user.id,
    //       email: user.email,
    //     }

    //     await setLoginSession(context.res, session)

    //     return { user }
    //   }

    //   throw new UserInputError('Invalid email and password combination')
    // },
    // async signOut(_parent, _args, context, _info) {
    //   removeTokenCookie(context.res)
    //   return true
    // },
  },
}