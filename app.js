const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()

app.set('view engine', 'ejs')
app.use(expressLayouts)

app.use('/', require('./routes/index'))

app.listen(3000)