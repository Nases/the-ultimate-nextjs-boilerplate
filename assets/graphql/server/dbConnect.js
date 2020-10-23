import mongoose from 'mongoose'

async function dbConnect() {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }).then(() => {
    console.log('MongoDB connected')
  }).catch(err => {
    console.log(err)
  })
}

export default dbConnect
