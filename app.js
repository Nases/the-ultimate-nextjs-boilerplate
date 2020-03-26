require('dotenv').config()

const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const flash = require('connect-flash')
const session = require('express-session')
const passport = require('passport')


const serverless = require('serverless-http')

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
app.engine('ejs', require('ejs').__express) // Needed for netlify-lambda's or serverless's webpack babel solution to work

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

// assign flash messages to global variables
app.use((req, res, next) => {
  Object.entries(req.flash()).map(([type, info]) => {
    res.locals[type] = info
  })
  next()
})

// With serverless + netlify-lambda
app.use('/.netlify/functions/app', require('./routes/index'))

module.exports.handler = serverless(app) // No need to export handler if not using netlify-lambda