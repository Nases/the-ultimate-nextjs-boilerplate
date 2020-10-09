const companyInfo = {
  name: 'Nases Group LLC',
  email: 'info@nasesgroup.com',
  address: 'Los Angeles 90025',
  website: 'nasesgroup.com',
  clientURI: (process.env.NODE_ENV === 'production') ? 'https://nextjsboilerplate.com/' : 'http://localhost:3000/',
  serverURI: (process.env.NODE_ENV === 'production') ? 'https://nextjsboilerplate.com/api/' : 'http://localhost:3000/api/'
}


module.exports = companyInfo