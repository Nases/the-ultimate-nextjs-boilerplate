var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

app.use((req, res) => {
  res.send(req.body)
  console.log(req)
})

export default app