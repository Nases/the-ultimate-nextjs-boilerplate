import { getUserSession } from '../../utils/auth'


const getUserData = (obj, args, { req, res }, info) => {
  return getUserSession(req).then(user => {
    return user
  }).catch(err => { return })
}

export default getUserData