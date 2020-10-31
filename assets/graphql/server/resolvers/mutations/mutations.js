import signUp from './signUp'
import changePassword from './changePassword'
import changeEmail from './changeEmail'
import changePersonalInformation from './changePersonalInformation'
import forgotPassword from './forgotPassword'


const mutations = {
  signUp,
  changePassword,
  changeEmail,
  changePersonalInformation,
  ...forgotPassword
}


export default mutations