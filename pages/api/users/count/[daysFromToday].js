const { calculateEarlierDate } = require('../../../../assets/utils/calculations')
const yup = require('yup')
import nextConnect from 'next-connect'
import auth from '../../../../assets/middleware/auth'
import dbConnect from '../../../../assets/middleware/dbConnect'
import User from '../../../../assets/models/User'


const handler = nextConnect()
handler.use(auth)
handler.use((req, res) => {
  dbConnect()
  var { daysFromToday } = req.query
  daysFromToday = parseInt(daysFromToday)
  if (!Number.isInteger(daysFromToday)) {
    res.status(406).send('Please provide an integer value.')
  } else {
    User.countDocuments({
      registrationDate: {
        $gte: calculateEarlierDate(daysFromToday)
      }
    }, (err, count) => {
      if (err) throw err
      res.send(count.toString())
    })
  }
})

export default handler