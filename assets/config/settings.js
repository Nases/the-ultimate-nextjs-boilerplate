const settings = {
  // clientURI: (process.env.NODE_ENV === 'production') ? 'https://nextjsboilerplate.com/' : 'http://localhost:3000/',
  // serverURI: (process.env.NODE_ENV === 'production') ? 'https://nextjsboilerplate.com/api/' : 'http://localhost:3000/api/',
  customerLogInRedirectPath: '/user/account-settings',
  customerSignUpRedirectPath: '/user/account-settings',
  // redirectPath: {
  //   logIn: {
  //     customer: '/user/account-settings',
  //     admin: '/admin/dashboard'
  //   }
  // }
}

const companyInfo = {
  name: 'The Ultimate Next.js Boilerplate',
  email: 'hasan@hasansefaozalp.com',
  address: 'Los Angeles 90025',
  website: 'nextjsboilerplate.com',
  github: 'https://github.com/Nases/nextjs-express-auth-starter'
}


export { settings as default, companyInfo }
