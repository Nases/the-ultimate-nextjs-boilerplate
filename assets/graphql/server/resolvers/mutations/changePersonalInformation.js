import { ChangePersonalInformationSchema } from '../../../../validation/schemas'
import User from '../../models/User'


const changePersonalInformation = (obj, { firstName, lastName }, { req, res }, info) => {
  return req.isAuthenticated(req, [1, 2]).then(user => {
    return ChangePersonalInformationSchema.validate({ firstName, lastName }).then(values => {
      return User.updateOne({ email: user.email }, { firstName, lastName }).then(raw => {
        return 'Personal information successfully updated.'
      }).catch(err => { throw err })
    }).catch(err => { throw err })
  }).catch(err => { throw err })
}


export default changePersonalInformation