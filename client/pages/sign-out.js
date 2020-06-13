import { useEffect } from 'react'
import { useUser, useDispatchUser } from '../contexts/UserProvider/UserProvider'
import userUtils from '../assets/userUtils'
import Router from 'next/router'



const SignOut = () => {
  const userDataDispatch = useDispatchUser()

  const signOut = async () => {
    userUtils.signOut()
      .then(response => {
        console.log(response)
        userDataDispatch({ type: 'SIGN_OUT' })
        Router.push('/')
      })
      .catch(error => {
        console.log(error)
        userDataDispatch({ type: 'SIGN_OUT' })
        Router.push('/')
      })
  }

  useEffect(() => {
    Router.push('/')
    signOut()
  }, [])
  return ('')
}

export default SignOut