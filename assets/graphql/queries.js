import { gql, useQuery } from '@apollo/client'

export const UserQuery = gql`
  query UserQuery {
    test {
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
