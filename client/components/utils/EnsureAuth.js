import { useEffect, useState } from 'react'
import { useUser, useDispatchUser } from '../../contexts/UserProvider/UserProvider'
import Router from 'next/router'


const EnsureAuth = ({ children }) => {
  const userData = useUser()
  const dispatchUserData = useDispatchUser()

  const isAuth = userData.isAuth

  const redirectNonAuth = () => {
    if (!isAuth) {
      Router.push('/')
    }
  }

  useEffect(() => {
    redirectNonAuth()
  }, [])
  return (
    <>
      {isAuth ? children : ''}
    </>
  )
}

export default EnsureAuth