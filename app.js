require('dotenv').config()

const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const app = express()

// mongoose.connect('mongodb+srv://nases:qweqwedD@nases-group-llc-bophr.azure.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
//   .then(() => console.log("MongoDB connected"))
//   .catch(err => console.log(err))

// mongoose.connect('mongodb+srv://nases2:qweqwedD@nases-group-llc-bophr.azure.mongodb.net/test?retryWrites=true&w=majority').then(() => {
//   console.log("Connected to Database");
// }).catch((err) => {
//   console.log("Not Connected to Database ERROR! ", err);
// });


app.set('view engine', 'ejs')
app.use(expressLayouts)

app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`)
})