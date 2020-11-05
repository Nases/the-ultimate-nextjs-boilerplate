import User from '../../models/User'


const test = (parent, args, context, info) => {
  return User.find({ email: 'qwe@qwe.qwe' }).then(value => {
    console.log(value[0])
    return (
      value[0]
    )
  })
}

export default test