import { getUserSession } from '../../utils/auth'


const getUserData = (obj, args, { req, res }, info) => {
  return getUserSession(req).then(user => {
    return user
  }).catch(err => { console.log(err) })

  // try {
  //   const session = await getUserSession(req)
  //   if (session) {
  //     console.log(req.user)
  //     return session
  //   }
  // } catch {
  //   return new Error('getUserData error!')
  // }
}

export default getUserData