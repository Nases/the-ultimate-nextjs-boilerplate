import signUp from './signUp'
import changePassword from './changePassword'
import changeEmail from './changeEmail'
import changePersonalInformation from './changePersonalInformation'
import forgotPassword from './forgotPassword'
import facebookOAuth from './facebookOAuth'


const mutations = {
  signUp,
  changePassword,
  changeEmail,
  changePersonalInformation,
  ...forgotPassword,
  facebookOAuth
}


export default mutations