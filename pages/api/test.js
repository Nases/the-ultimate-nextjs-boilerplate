import nextConnect from 'next-connect'
import auth from '../../assets/middleware/auth'
import dbConnect from '../../assets/middleware/dbConnect'
import mongoose from 'mongoose'

import User from '../../assets/models/User'

const handler = nextConnect()

handler.use(auth)
handler.use((req, res) => {
  dbConnect()
  var User = mongoose.model('User')
  User.find().then(value => res.send(value))
})


export default handler