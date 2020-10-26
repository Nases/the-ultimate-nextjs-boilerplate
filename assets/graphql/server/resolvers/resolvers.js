import dbConnect from '../utils/dbConnect'
import User, { UserSchema } from '../../../models/User'
import { setUserSession, getUserSession } from '../utils/auth'
import { removeSessionTokenCookie } from '../utils/auth-cookies'
import queries from './queries/queries'
import mutations from './mutations/mutations'

export const resolvers = {
  Query: {
    ...queries,
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
    }
  },
  Mutation: {
    ...mutations
  },
}