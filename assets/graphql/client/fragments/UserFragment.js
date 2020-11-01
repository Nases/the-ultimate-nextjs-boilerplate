import { gql } from '@apollo/client'


const UserFragment = gql`
  fragment userFields on User {
    _id
    roleId
    email
    password
    firstName
    lastName
    address
    registrationDate
    passwordLastUpdated
    forgotPasswordToken
  }
`


export default UserFragment