import dbConnect from '../middleware/dbConnect'
import User, { UserSchema } from '../models/User'

import nextConnect from 'next-connect'
import auth from '../middleware/auth'
import passport from 'passport'
import session from './session'


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
  },
  Mutation: {
    async signUp(obj, args, context, info) {
      const { SignUpSchema } = require('../validation/schemas')
      const bcrypt = require('bcryptjs')

      session({
        name: 'sessFromGraphQL',
        secret: process.env.SESSION_SECRET,
        cookie: {
          maxAge: 60 * 60 * 8, // 8 hours,
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          path: '/',
          sameSite: 'lax',
        },
      })

      // console.log(context.req)

      // const { email, password, confirmPassword } = args

      // const user = await SignUpSchema.validate({
      //   email: email,
      //   password: password,
      //   confirmPassword: confirmPassword
      // })
      //   .then(values => {
      //     User.exists({ email }, (err, exists) => {
      //       if (exists) {
      //         // User email exists
      //         res.status(406).send('This email is already registered.')
      //       } else {
      //         // User email does not exist
      //         bcrypt.genSalt(10, (err, salt) => {
      //           if (err) throw err
      //           bcrypt.hash(password, salt, (err, hash) => {
      //             if (err) throw err
      //             const newUser = new User({
      //               email,
      //               password: hash
      //             })
      //             // Save user to mongodb
      //             newUser.save()
      //               .then(user => {
      //                 req.logIn(user, err => {
      //                   if (err) throw err
      //                   res.send(user)
      //                 })
      //               })
      //               .catch(err => {
      //                 throw err
      //               })
      //           })
      //         })
      //       }
      //     })
      //   })
      //   .catch(err => {
      //     res.status(406).send('Something went wrong, please try again later.')
      //   })

      // return user
    }
  },
}