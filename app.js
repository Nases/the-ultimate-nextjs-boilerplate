require('dotenv').config()

const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()

app.set('view engine', 'ejs')
app.use(expressLayouts)

app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`)
})