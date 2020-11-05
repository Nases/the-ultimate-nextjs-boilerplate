import mongoose from 'mongoose'


var connection = {}

const dbConnect = () => {
  if (connection.isConnected) return

  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }).then(db => {
    console.log('MongoDB connected')
    connection.isConnected = db.connections[0].readyState
  }).catch(err => {
    console.log(err)
  })
}

export default dbConnect
