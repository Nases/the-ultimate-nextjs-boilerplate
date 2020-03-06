require('dotenv').config()

const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const flash = require('connect-flash')
const session = require('express-session')
const passport = require('passport')

const app = express()

// Passport config
require('./config/passport')(passport)

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))

// EJS middleware
app.set('view engine', 'ejs')
app.use(expressLayouts)

// bodyparser middleware (in order to get urlencoded data from req.body when form is posted)
app.use(express.urlencoded({ extended: false }))

// Express session middleware
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
    // cookie: { secure: true }
  })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Flash messages middleware
app.use(flash())

// Self middleware for global variables
app.use((req, res, next) => {
  console.log(req.flash());
  const flashMessages = req.flash()
  // Object.entries(flashMessages).forEach((value, index) => {
  //   console.log(index)
  // })
  res.locals.errors = req.flash('errors')
  res.locals.info = req.flash('info')
  res.locals.success = req.flash('success')
  next()
})

app.use('/', require('./routes/index'))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`)
})
