import { useEffect } from 'react'
import { useUser, useDispatchUser } from '../contexts/UserProvider/UserProvider'
import userUtils from '../assets/userUtils'
import Router from 'next/router'


const LogOut = () => {
  const userDataDispatch = useDispatchUser()

  const logOut = async () => {
    await userUtils.logOut()
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
    logOut()
    Router.push('/')
  }, [])
  return ('')
}

export default LogOut