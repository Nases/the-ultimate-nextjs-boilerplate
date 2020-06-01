require('dotenv').config()

const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const flash = require('connect-flash')
const session = require('express-session')
const passport = require('passport')


const path = require('path')

const app = express()

// Passport config
require('./config/passport')(passport)

mongoose
  .connect('mongodb+srv://nases2:DtpEkmjqcWvV3DQ1@nases-group-llc-bophr.azure.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))



// app.set('views', path.join(__dirname + '/../server/views'))
// app.set('views', path.join(__dirname + './views'))


// EJS middleware
// app.engine('ejs', require('ejs').__express) // Needed for netlify-lambda's or serverless's webpack babel solution to work
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

// assign flash messages to global variables
app.use((req, res, next) => {
  Object.entries(req.flash()).map(([type, info]) => {
    res.locals[type] = info
  })
  next()
})


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server started on port ${PORT}`))