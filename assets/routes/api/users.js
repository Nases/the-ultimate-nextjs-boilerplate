const User = require('../../models/User')
var router = require('express').Router()
const yup = require('yup')


router.get('/', (req, res, next) => {
  var { limit, sort } = req.query


  const schema = yup.object().shape({
    limit: yup
      .number()
      .min(1, 'Limit must be at least 1')
      .max(1000, 'Limit can be maximum 1000'),
    sort: yup
      .string()
      .matches(/(asc|desc)/, { excludeEmptyString: true })
  })

  schema.validate({
    limit: limit,
    sort: sort
  })
    .then(values => {
      User.find()
        .sort({ _id: (sort === 'asc' ? -1 : 1) })
        .limit(values.limit || 20)
        .then(value => { res.send(value) })
        .catch(err => res.send(err))
    })
    .catch(err => res.send(err.errors))





})

module.exports = router