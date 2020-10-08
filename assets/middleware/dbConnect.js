import mongoose from 'mongoose'

const dbConnect = (req, res, next) => {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => {
      console.log('MongoDB connected')
      next()
    })
    .catch(err => {
      console.log(err)
    })
}

export default dbConnect