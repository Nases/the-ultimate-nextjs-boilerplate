import nextConnect from 'next-connect'
import auth from '../../assets/middleware/auth'
import dbConnect from '../../assets/middleware/dbConnect'


const handler = nextConnect()

handler.use(auth)
handler.use((req, res) => {
  dbConnect()
  if (req.isAuthenticated()) {
    res.send(req.user)
  } else {
    res.status(401).send('Unauthenticated')
  }
})


export default handler
