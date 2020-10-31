import signUp from './signUp'
import changePassword from './changePassword'
import changeEmail from './changeEmail'
import changePersonalInformation from './changePersonalInformation'
import forgotPassword, { forgotPasswordForm } from './forgotPassword'



const mutations = {
  signUp,
  changePassword,
  changeEmail,
  changePersonalInformation,
  forgotPassword,
  forgotPasswordForm
}


export default mutations