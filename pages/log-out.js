import { useEffect } from 'react'
import { useDispatchUser } from '../contexts/UserProvider/UserProvider'
import Router from 'next/router'
import { removeSessionTokenCookie } from '../assets/graphql/server/utils/auth-cookies'


export async function getServerSideProps(context) {
  removeSessionTokenCookie(context.res)
  return {
    props: {}
  }
}


const LogOut = () => {
  const userDataDispatch = useDispatchUser()

  useEffect(() => {
    userDataDispatch({ type: 'LOG_OUT' })
    Router.push('/')
  }, [])
  return ('')
}


export default LogOut