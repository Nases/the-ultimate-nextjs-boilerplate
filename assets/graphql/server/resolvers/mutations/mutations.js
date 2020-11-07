import signUp from './signUp'
import changePassword from './changePassword'
import changeEmail from './changeEmail'
import changePersonalInformation from './changePersonalInformation'
import forgotPassword from './forgotPassword'
import facebookOAuth from './facebookOAuth'
import googleOAuth from './googleOAuth'
import createPaymentIntent from './stripe/createPaymentIntent'


const mutations = {
  signUp,
  changePassword,
  changeEmail,
  changePersonalInformation,
  ...forgotPassword,
  facebookOAuth,
  googleOAuth,
  createPaymentIntent
}


export default mutations