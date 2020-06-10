
const uri = 'http://localhost:5000/login'

const userUtils = {
  login: () => {
    const p = new Promise((resolve, reject) => {
      reject('promise rejected!')
    })
    return p
  }
}



export default userUtils

