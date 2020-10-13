import Layout from '../components/Layout/Layout'
import LayoutIndent from '../components/Layout/LayoutIndent'
import { companyInfo } from '../assets/settings'

import { gql, useQuery, useMutation } from '@apollo/client'



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

  const SignUpMutation = gql`
    mutation SignUpMutation($ey: String, $yo: String) {
      signUp(ey: $ey, yo: $yo) {
        _id
      }
    }
  `

  const [signUp] = useMutation(SignUpMutation)
  signUp({ variables: { ey: 'this is ey', yo: 'yoyyo' } }).then(value => console.log(value.data.signUp)).catch(err => console.log(err.message))



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
