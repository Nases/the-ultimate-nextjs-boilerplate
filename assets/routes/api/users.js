const User = require('../../models/User')
var router = require('express').Router()
const yup = require('yup')


router.get('/', (req, res, next) => {
  var { limit, sort, skip } = req.query

  const schema = yup.object().shape({
    limit: yup
      .number()
      .min(1, 'Limit must be at least 1')
      .max(1000, 'Limit can be maximum 1000'),
    sort: yup
      .string()
      .matches(/(asc|desc)/, { excludeEmptyString: true }),
    skip: yup
      .number()
      .min(0, 'Skip must be at least 0')
      .max(99999999, 'Skip can be maximum 99999999'),
  })

  schema.validate({
    limit: limit,
    sort: sort,
    skip: skip
  })
    .then(values => {
      User.find()
        .sort({ _id: (sort === 'asc' ? -1 : 1) })
        .skip(values.skip || 0)
        .limit(values.limit || 20)
        .then(value => res.send(value))
        .catch(err => res.send(err))
    })
    .catch(err => res.send(err.errors))
})

router.post('/count', (req, res) => {
  User.countDocuments()
    .then(value => res.send(String(value)))
    .catch(err => res.send(err))
})

module.exports = router