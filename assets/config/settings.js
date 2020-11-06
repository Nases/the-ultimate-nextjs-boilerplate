const settings = {
  customerLogInRedirectPath: '/user/account-settings',
  customerSignUpRedirectPath: '/user/account-settings',
}

export const redirectPath = {
  logIn: {
    customer: '/user/account-settings',
    admin: '/admin/dashboard'
  },
  signUp: {
    customer: '/user/account-settings',
    admin: '/admin/dashboard'
  }
}

export const companyInfo = {
  name: 'The Ultimate Next.js Boilerplate',
  email: 'hasan@hasansefaozalp.com',
  address: 'Los Angeles 90025',
  website: 'nextjsboilerplate.com',
  github: 'https://github.com/Nases/nextjs-express-auth-starter'
}


export default settings
