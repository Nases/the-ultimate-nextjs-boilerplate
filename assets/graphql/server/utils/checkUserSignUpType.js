const checkUserSignUpType = user => {
  return (
    new Promise((resolve, reject) => {
      if (user.password) resolve('Normal')
      if (user.facebookID) resolve('Facebook')
      if (user.googleID) resolve('Google')
      reject('Something went wrong, please try again later.')
    })
  )
}


export default checkUserSignUpType