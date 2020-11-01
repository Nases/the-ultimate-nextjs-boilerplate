import { serialize, parse } from 'cookie'


const TOKEN_NAME = 'session-token'

export const MAX_AGE = 60 * 60 * 24 * 365 // 365 days

export async function setTokenCookie(res, token) {
  const cookie = serialize(TOKEN_NAME, token, {
    maxAge: MAX_AGE,
    expires: new Date(Date.now() + MAX_AGE * 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    sameSite: 'lax',
  })

  await res.setHeader('Set-Cookie', cookie)
}


export const removeSessionTokenCookie = res => {
  return (
    new Promise((resolve, reject) => {
      try {
        const cookie = serialize(TOKEN_NAME, '', {
          maxAge: -1,
          path: '/',
        })
        res.setHeader('Set-Cookie', cookie)
        resolve()
      } catch {
        reject()
      }
    })
  )
}

export function parseCookies(req) {
  // For API Routes we don't need to parse the cookies.
  if (req.cookies) return req.cookies

  // For pages we do need to parse the cookies.
  const cookie = req.headers?.cookie
  return parse(cookie || '')
}

export function getTokenCookie(req) {
  const cookies = parseCookies(req)
  return cookies[TOKEN_NAME]
}