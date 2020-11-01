import { useEffect } from 'react'
import { useUser, useDispatchUser } from '../../assets/contexts/UserProvider/UserProvider'
import { gql, useQuery } from '@apollo/client'
import UserFragment from '../../assets/graphql/client/fragments/UserFragment'


const GetUserData = ({ children }) => {
  const userData = useUser()
  const dispatchUserData = useDispatchUser()

  const GetUserData = gql`
    query GetUserData {
      getUserData {
        ...userFields
      }
    }
    ${UserFragment}
  `

  const { data, loading, error } = useQuery(GetUserData, { fetchPolicy: 'no-cache' })

  useEffect(() => {
    if (!error && !loading && data?.getUserData?._id) {
      if (userData._id !== data.getUserData._id) {
        dispatchUserData({ type: 'LOGIN', userData: data.getUserData })
      }
    } else if (!loading) {
      dispatchUserData({ type: 'SET_IS_LOADING_FALSE' })
    }
  }, [loading])

  return (
    <>
      {children}
    </>
  )
}


export default GetUserData