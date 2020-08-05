import axios from 'axios'
import companyInfo from './company-info'


const serverURI = companyInfo.serverURI

const userUtils = {
  login: (email, password) => {
    const p = axios.post(serverURI + 'login', {
      email: email,
      password: password
    }, {
      withCredentials: true
    })
    return p
  },
  signUp: (email, password, confirmPassword) => {
    const p = axios.post(serverURI + 'signup', {
      email: email,
      password: password,
      confirmPassword: confirmPassword
    }, {
      withCredentials: true
    })
    return p
  },
  changePassword: (currentPassword, newPassword, confirmNewPassword) => {
    const p = axios.post(serverURI + 'change-password', {
      currentPassword: currentPassword,
      newPassword: newPassword,
      confirmNewPassword: confirmNewPassword
    }, {
      withCredentials: true
    })
    return p
  },
  changeEmail: (email, password) => {
    const p = axios.post(serverURI + 'change-email', {
      email: email,
      password: password
    }, {
      withCredentials: true
    })
    return p
  },
  forgotPassword: (email) => {
    const p = axios.post(serverURI + 'forgot-password', {
      email: email,
    }, {
      withCredentials: true
    })
    return p
  },
  forgotPasswordChangePassword: (email, forgotPasswordToken, currentPassword, newPassword, confirmNewPassword) => {
    const p = axios.post(serverURI + 'forgot-password-change-password', {
      email: email,
      forgotPasswordToken: forgotPasswordToken,
      currentPassword: currentPassword,
      newPassword: newPassword,
      confirmNewPassword: confirmNewPassword
    }, {
      withCredentials: true
    })
    return p
  },
  ensureForgotPasswordChangePassword: (email, forgotPasswordToken) => {
    const p = axios.post(serverURI + 'ensure-forgot-password-change-password', {
      email: email,
      forgotPasswordToken: forgotPasswordToken
    }, {
      withCredentials: true
    })
    return p
  },
  getUserData: () => {
    const p = axios.post(serverURI + 'get-user-data', null, {
      withCredentials: true
    })
    return p
  },
  signOut: () => {
    const p = axios.post(serverURI + 'sign-out', null, {
      withCredentials: true
    })
    return p
  }
}



export default userUtils

