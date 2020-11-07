import { gql } from '@apollo/client'


export const typeDefs = gql`
  scalar Date

  type User {
    _id: ID
    role: String
    email: String
    password: String
    firstName: String
    lastName: String
    registrationDate: Date
    passwordLastUpdated: Date
    forgotPasswordToken: String
    facebookID: String
    googleID: String
  }
  type Query {
    logIn(email: String, password: String): User
    test: User
    getUserData: User
    user(id: String): User
    users(limit: Int, sort: String, skip: Int, email: String): [User]
    countUsers(email: String, daysBefore: Int): Int
    logOut: String
  }
  type Mutation {
    signUp(email: String, password: String, confirmPassword: String): User
    changePassword(currentPassword: String, newPassword: String, confirmNewPassword: String): String
    changeEmail(email: String, password: String): String
    changePersonalInformation(firstName: String, lastName: String): String
    forgotPasswordForm(email: String): String
    forgotPasswordChangePassword(email: String, forgotPasswordToken: String, newPassword: String, confirmNewPassword: String): String
    forgotPasswordChangePasswordEnsure(email: String, forgotPasswordToken: String): String
    facebookOAuth(email: String, facebookID: String, firstName: String, lastName: String): User
    googleOAuth(email: String, googleID: String, firstName: String, lastName: String): User
    createPaymentIntent: String
  }
`