import { useEffect } from 'react'
import userUtils from '../../assets/userUtils'
import { useUser, useDispatchUser } from '../../contexts/UserProvider/UserProvider'
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

  const { data, loading, error } = useQuery(GetUserData)
  console.log(data)




  useEffect(() => {
    // const fetchUserData = async () => {
    //   await userUtils.getUserData()
    //     .then(response => {
    //       if (userData._id !== response.data._id) {
    //         dispatchUserData({ type: 'LOGIN', userData: response.data })
    //       }
    //       // console.log(response)
    //     })
    //     .catch(error => {
    //       dispatchUserData({ type: 'SET_IS_LOADING_FALSE' })
    //     })
    // }
    // fetchUserData()
    if (!error && !loading && data.getUserData._id) dispatchUserData({ type: 'LOGIN', userData: data.getUserData })
    if (error) dispatchUserData({ type: 'SET_IS_LOADING_FALSE' })

  }, [loading])

  return (
    <>
      {children}
    </>
  )
}

export default GetUserData