import axios from 'axios'


const uri = 'http://localhost:5000/'

const userUtils = {
  login: (email, password) => {
    const p = axios.post(uri + 'login', {
      email: email,
      password: password
    }, {
      withCredentials: true
    })
    return p
  },
  signUp: (email, password, confirmPassword) => {
    const p = axios.post(uri + 'signup', {
      email: email,
      password: password,
      confirmPassword: confirmPassword
    })
    return p
  },
  getUserData: () => {
    const p = axios.post(uri + 'get-user-data', null, {
      withCredentials: true
    })
    return p
  },
  signOut: () => {
    const p = axios.post(uri + 'sign-out', null, {
      withCredentials: true
    })
    return p
  }
}



export default userUtils

