import User from '../../../../models/User'


const test = async (obj, args, context, info) => {
  // dbConnect()
  return User.find({ email: 'qwe@qwe.qwe' }).then(value => {
    console.log(value[0])
    return (
      value[0]
    )
  })
}

export default test