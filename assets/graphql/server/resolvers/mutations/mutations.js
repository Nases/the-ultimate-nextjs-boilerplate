import signUp from './signUp'
import changePassword from './changePassword'
import changeEmail from './changeEmail'
import changePersonalInformation from './changePersonalInformation'
import forgotPassword from './forgotPassword'
import facebookOAuth from './facebookOAuth'
import googleOAuth from './googleOAuth'


const mutations = {
  signUp,
  changePassword,
  changeEmail,
  changePersonalInformation,
  ...forgotPassword,
  facebookOAuth,
  googleOAuth
}


export default mutations