import nextConnect from 'next-connect'
import auth from '../../assets/middleware/auth'


const handler = nextConnect()

handler.use(auth)
handler.use((req, res) => {
  req.logOut()
  res.send(true)
  // req.session.destroy(error => {
  // if (error) throw error
  // res.send(true)
  // })
})


export default handler