const settings = {
  clientURI: (process.env.NODE_ENV === 'production') ? 'https://nextjsboilerplate.com/' : 'http://localhost:3000/',
  serverURI: (process.env.NODE_ENV === 'production') ? 'https://nextjsboilerplate.com/api/' : 'http://localhost:3000/api/',
  customerLoginRedirectPath: '/user/account-settings',
  customerSignUpRedirectPath: '/user/account-settings'
}

export default settings