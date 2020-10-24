import { useEffect } from 'react'
import { useUser, useDispatchUser } from '../contexts/UserProvider/UserProvider'
import userUtils from '../assets/userUtils'
import Router from 'next/router'
import { gql, useQuery } from '@apollo/client'


const LogOut = () => {
  const userDataDispatch = useDispatchUser()

  const LogOutQuery = gql`
    query LogOutQuery {
      logOut
    }
  `

  const { data, loading, error } = useQuery(LogOutQuery)


  useEffect(() => {
    if (!loading && !error && data) {
      userDataDispatch({ type: 'LOG_OUT' })
      Router.push('/')
    } else if (!loading && error) {
      userDataDispatch({ type: 'LOG_OUT' })
      Router.push('/')
    }
  }, [loading])
  return ('')
}

export default LogOut