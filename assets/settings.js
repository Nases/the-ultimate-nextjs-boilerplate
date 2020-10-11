const settings = {
  clientURI: (process.env.NODE_ENV === 'production') ? 'https://nextjsboilerplate.com/' : 'http://localhost:3000/',
  serverURI: (process.env.NODE_ENV === 'production') ? 'https://nextjsboilerplate.com/api/' : 'http://localhost:3000/api/',
  customerLoginRedirectPath: '/user/account-settings',
  customerSignUpRedirectPath: '/user/account-settings'
}

const companyInfo = {
  name: 'Hasan Sefa Ozalp',
  email: 'hasan@hasansefaozalp.com',
  address: 'Los Angeles 90025',
  website: 'nextjsboilerplate.com',
  github: 'https://github.com/Nases/nextjs-express-auth-starter'
}

// routePermissions is not in use yet
const routePermissions = {
  '/user/account-settings': [1, 2],
  '/admin/debug': [2],
  '/admin/dastboard': [2],
  '/admin/users': [2],
  '/admin/user': [2],
}


export { settings as default, routePermissions, companyInfo }
