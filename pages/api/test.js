import nextConnect from 'next-connect'
import auth from '../../assets/middleware/auth'


const handler = nextConnect()

handler.use(auth).use((req, res) => { res.send('hellu from test!') })

export default handler