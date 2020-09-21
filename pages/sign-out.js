import { useEffect } from 'react'
import { useUser, useDispatchUser } from '../contexts/UserProvider/UserProvider'
import userUtils from '../assets/userUtils'
import Router from 'next/router'


const SignOut = () => {
  const userDataDispatch = useDispatchUser()

  const signOut = async () => {
    await userUtils.signOut()
      .then(response => {
        // console.log(response)
        userDataDispatch({ type: 'SIGN_OUT' })
      })
      .catch(error => {
        // console.log(error)
        userDataDispatch({ type: 'SIGN_OUT' })
      })
  }

  useEffect(() => {
    signOut()
    Router.push('/')
  }, [])
  return ('')
}

export default SignOut