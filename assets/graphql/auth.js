import Iron from '@hapi/iron'
import { MAX_AGE, setTokenCookie, getTokenCookie } from './auth-cookies'


const SESSION_TOKEN_SECRET = process.env.SESSION_TOKEN_SECRET

export async function setUserSession(res, session) {
  const createdAt = Date.now()
  // Create a session object with a max age that we can validate later
  const obj = { ...session, createdAt, maxAge: MAX_AGE }
  const token = await Iron.seal(obj, SESSION_TOKEN_SECRET, Iron.defaults)

  setTokenCookie(res, token)
}

export async function getUserSession(req) {
  const token = getTokenCookie(req)

  if (!token) return

  const session = await Iron.unseal(token, SESSION_TOKEN_SECRET, Iron.defaults)
  const expiresAt = session.createdAt + session.maxAge * 1000

  // Validate the expiration date of the session
  if (Date.now() < expiresAt) {
    return session
  }
}