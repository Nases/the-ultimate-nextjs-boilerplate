import { gql } from '@apollo/client'

export const typeDefs = gql`
  type User {
    _id: ID
    roleId: Int
    email: String
    password: String
    firstName: String
    lastName: String
    address: String
    lastPasswordUpdate: String
    registrationDate: String
    passwordLastUpdated: String
    forgotPasswordToken: String
  }
  input SignUpInput {
    email: String!
    password: String!
    confirmPassword: String!
  }
  input TestInput {
    ey: String
  }
  input SignInInput {
    email: String!
    password: String!
  }
  type SignUpPayload {
    user: User!
  }
  type SignInPayload {
    user: User!
  }
  type Query {
    user(id: String!): User
    users: [User]
    viewer: User
    test: User
    getUserData: String
  }
  type Mutation {
    signUp(email: String, password: String, confirmPassword: String): User
    # signUp(input: SignUpInput!): SignUpPayload!
    signIn(input: SignInInput!): SignInPayload!
    signOut: Boolean!
  }
`