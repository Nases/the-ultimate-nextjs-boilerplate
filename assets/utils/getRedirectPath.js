import { redirectPath } from '../config/settings'


const getRedirectPath = (role, type) => {
  if (role === 'CUSTOMER') return redirectPath[type].customer
  if (role === 'ADMIN') return redirectPath[type].admin
  return redirectPath[type].customer // redirect path in case role is not recognized
}


export default getRedirectPath