// require('dotenv').config()

const express = require('express')
// const cors = require('cors')
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

  // server.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))

  server.use(bodyParser.json())
  require('./assets/config/passport')(passport)

  server.use('/api',
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true,
      cookie: {
        secure: process.env.NODE_ENV === 'production'
      }
    }), passport.initialize(),
    passport.session(),
    require('./assets/routes/index')
  )


  server.all('*', (req, res) => {
    return handle(req, res)
  })

  const PORT = process.env.PORT || 3000
  server.listen(PORT, console.log(`Server started on port ${PORT}`))
})
