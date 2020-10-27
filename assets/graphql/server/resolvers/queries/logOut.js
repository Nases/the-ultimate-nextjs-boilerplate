import { removeSessionTokenCookie } from '../../utils/auth-cookies'


const logOut = (obj, args, { req, res }, info) => {
  return (
    removeSessionTokenCookie(res).then(() => {
      return ('Logged out.')
    }).catch(err => { throw err })
  )
}

export default logOut