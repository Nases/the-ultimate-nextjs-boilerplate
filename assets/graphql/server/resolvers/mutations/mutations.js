import signUp from './signUp'
import changePassword from './changePassword'
import changeEmail from './changeEmail'
import changePersonalInformation from './changePersonalInformation'
import forgotPassword from './forgotPassword'
import FacebookOAuth from './FacebookOAuth'


const mutations = {
  signUp,
  changePassword,
  changeEmail,
  changePersonalInformation,
  ...forgotPassword,
  FacebookOAuth
}


export default mutations