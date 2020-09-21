const companyInfo = {
  name: 'Nases Group LLC',
  email: 'info@nasesgroup.com',
  address: 'Los Angeles 90025',
  website: 'nasesgroup.com',
  clientURI: (process.env.NODE_ENV === 'development') ? process.env.CLIENT_URI_DEVELOPMENT : process.env.CLIENT_URI_PRODUCTION,
  serverURI: (process.env.NODE_ENV === 'development') ? process.env.SERVER_URI_DEVELOPMENT : process.env.SERVER_URI_PRODUCTION
}

module.exports = { companyInfo }