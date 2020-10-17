import Layout from '../components/Layout/Layout'
import LayoutIndent from '../components/Layout/LayoutIndent'
import { companyInfo } from '../assets/settings'

import { gql, useQuery, useMutation } from '@apollo/client'

import Iron from '@hapi/iron'



const Template = () => {
  var title = `Default title | ${companyInfo.name}`
  var description = 'Default description.'

  const UserQuery = gql`
    query UserQuery($id: String!) {
      user(id: $id) {
        _id
        email
        password
        roleId
        firstName
        lastName
        address
        forgotPasswordToken
        registrationDate
        passwordLastUpdated
      }
    }
  `

  const UsersQuery = gql`
    query UsersQuery {
      users {
        _id
        email
        password
        roleId
        firstName
        lastName
        address
        forgotPasswordToken
        registrationDate
        passwordLastUpdated
      }
    }
  `

  const GetUserDataQuery = gql`
    query GetUserDataQuery {
      getUserData
    }
  `

  const { data, loading, error } = useQuery(GetUserDataQuery)
  console.log(data)


  // const { data, loading, error } = useQuery(UserQuery, { variables: { id: '5f6fc45ed8971024e0cf18f4' } })
  // const { data, loading, error } = useQuery(UsersQuery)
  // console.log(`data: ${data}`)
  // console.log(`loading: ${loading}`)
  // console.log(`error: ${error?.message}`)




  return (
    <Layout title={title} description={description}>
      <LayoutIndent>
        Hey
      </LayoutIndent>
    </Layout>
  )
}

export default Template
