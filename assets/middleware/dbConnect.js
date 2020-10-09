// import mongoose from 'mongoose'

// export default async function dbConnect(req, res, next) {
//   await mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//     .then(() => {
//       console.log('MongoDB connected')
//       next()
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }

/* This is a database connection function*/
import mongoose from 'mongoose'

const connection = {} /* creating connection object*/

async function dbConnect() {
  /* check if we have connection to our databse*/
  if (connection.isConnected) {
    return
  }

  /* connecting to our database */
  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }).then(() => {
    console.log('MongoDB connected')
    connection.isConnected = db.connections[0].readyState
    // next()
  })
    .catch(err => {
      console.log(err)
    })

}

export default dbConnect
