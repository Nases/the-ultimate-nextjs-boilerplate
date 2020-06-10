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
  }
}



export default userUtils

