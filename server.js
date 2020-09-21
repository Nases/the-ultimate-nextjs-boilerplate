require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const session = require('express-session')
const passport = require('passport')
const bodyParser = require('body-parser')

const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


app.prepare().then(() => {
  const server = express()

  server.use(cors({ credentials: true, origin: 'http://localhost:3000' }))


  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))

  server.use(bodyParser.json())
  require('./config/passport')(passport)


  server.use(
    session({
      secret: 'secret', // keep this inside env var
      resave: true,
      saveUninitialized: true,
      cookie: { secure: false }
      // cookie: {
      //   maxAge: 60 * 60 * 8, // 8 hours,
      //   httpOnly: true,
      //   secure: process.env.NODE_ENV === 'production',
      //   path: '/',
      //   sameSite: 'lax',
      // },
    })
  )

  server.use(passport.initialize())
  server.use(passport.session())

  server.use('/api', require('./routes/index'))

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  const PORT = process.env.PORT || 3000
  server.listen(PORT, console.log(`Server started on port ${PORT}`))
})
