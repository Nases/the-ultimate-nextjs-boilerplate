const { SignUpSchema } = require('../../assets/validation/schemas')
const bcrypt = require('bcryptjs')
import nextConnect from 'next-connect'
import auth from '../../assets/middleware/auth'
import dbConnect from '../../assets/middleware/dbConnect'
import User from '../../assets/models/User'


const handler = nextConnect()

handler.use(auth)
handler.use((req, res) => {
  dbConnect()

})


export default handler