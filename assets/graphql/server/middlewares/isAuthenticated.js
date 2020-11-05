import { getUserSession } from '../utils/auth'


const isAuthenticated = (req, roleRequired = []) => {
  return (
    new Promise((resolve, reject) => {
      getUserSession(req).then(user => {
        if (user) {
          if (roleRequired.includes(user.role)) {
            resolve(user)
          } else { reject('Unauthorized.') }
        } else { reject('Unauthenticated.') }
      }).catch(err => reject(err))
    })
  )
}


export default isAuthenticated