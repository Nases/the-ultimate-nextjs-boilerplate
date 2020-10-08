import mongoose from 'mongoose'

export default async function dbConnect(req, res, next) {
  await mongoose.connect(process.env.MONGODB_URI, {
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

