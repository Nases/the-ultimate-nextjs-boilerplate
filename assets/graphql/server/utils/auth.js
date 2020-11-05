import Iron from '@hapi/iron'
import { MAX_AGE, setTokenCookie, getTokenCookie } from './auth-cookies'
import User from '../models/User'


const SESSION_TOKEN_SECRET = process.env.SESSION_TOKEN_SECRET


export const setUserSession = (res, userId) => {
  return (
    new Promise((resolve, reject) => {
      const createdAt = Date.now()
      // Create a session object with a max age that we can validate later
      const obj = { userId, createdAt, maxAge: MAX_AGE }
      Iron.seal(obj, SESSION_TOKEN_SECRET, Iron.defaults).then(token => {
        setTokenCookie(res, token)
        resolve()
      }).catch(err => reject(err))
    })
  )
}


export const getUserSession = req => {
  return (
    new Promise((resolve, reject) => {
      const token = getTokenCookie(req)
      if (token) {
        Iron.unseal(token, SESSION_TOKEN_SECRET, Iron.defaults).then(session => {
          if (Date.now() < (session.createdAt + session.maxAge * 1000)) {
            User.find({ _id: session.userId }).then(value => resolve(value[0]))
          } else { reject('session-token expired.') }
        }).catch(err => reject(err))
      } else { reject('No session-token found.') }
    })
  )
}
