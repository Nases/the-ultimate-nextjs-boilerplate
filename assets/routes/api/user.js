const User = require('../../models/User')
var router = require('express').Router()
const yup = require('yup')


router.post('/', (req, res, next) => {
  var { id } = req.query

  const schema = yup.object().shape({
    id: yup
      .string()
      .required()
      .min(1, 'ID must be at least 1 character long')
      .max(100, 'ID can be maximum 100 character long')
  })

  schema.validate({
    id: id
  })
    .then(values => {
      User.find({
        _id: id
      })
        .then(value => { res.send(value) })
        .catch(err => res.send(err))
    })
    .catch(err => res.send(err.errors))
})

module.exports = router