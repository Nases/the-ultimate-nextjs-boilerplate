// const { calculateEarlierDate } = require('../../../../assets/utils/calculations')
// const yup = require('yup')
// import nextConnect from 'next-connect'
// import auth from '../../../../assets/middleware/auth'
// import dbConnect from '../../../../assets/middleware/dbConnect'
// import User from '../../../../assets/models/User'


// const lastDaysAllowed = [7, 30, 60, 180, 360]


// const handler = nextConnect()
// handler.use(auth)
// handler.use((req, res) => {
//   dbConnect()
//   const { daysFromToday } = req.query
//   User.countDocuments({
//     registrationDate: {
//       $gte: calculateEarlierDate(daysFromToday)
//     }
//   }, (err, count) => {
//     if (err) throw err
//     res.send(count.toString() || 'err')
//   })
// })

// export default handler