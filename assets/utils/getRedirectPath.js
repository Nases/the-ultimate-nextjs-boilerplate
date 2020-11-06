import { redirectPath } from '../config/settings'


const getRedirectPath = (user, type) => {
  if (user.role === 'CUSTOMER') return redirectPath[type].customer
  if (user.role === 'ADMIN') return redirectPath[type].admin
  return redirectPath[type].customer // redirect path in case role is not recognized
}


export default getRedirectPath