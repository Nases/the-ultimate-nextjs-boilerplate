const companyInfo = {
  name: 'Hasan Sefa Ozalp',
  email: 'hasan@hasansefaozalp.com',
  address: 'Los Angeles 90025',
  website: 'nextjsboilerplate.com',
  github: 'https://github.com/Nases/nextjs-express-auth-starter',
  clientURI: (process.env.NODE_ENV === 'production') ? 'https://nextjsboilerplate.com/' : 'http://localhost:3000/',
  serverURI: (process.env.NODE_ENV === 'production') ? 'https://nextjsboilerplate.com/api/' : 'http://localhost:3000/api/'
}


module.exports = companyInfo