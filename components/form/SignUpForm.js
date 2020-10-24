import { Formik, Form, Field, ErrorMessage } from 'formik'
import Input from './partials/Input'
import Label from './partials/Label'
import FormErrorMessage from './partials/FormErrorMessage'
import Button from '../Button/Button'
import { SignUpSchema } from '../../assets/validation/schemas'
import userUtils from '../../assets/userUtils'
import { useUser, useDispatchUser } from '../../contexts/UserProvider/UserProvider'
import { useAuthModal, useDispatchAuthModal } from '../../contexts/AuthModalProvider/AuthModalProvider'
import Router from 'next/router'
import settings from '../../assets/settings'

import { gql, useMutation } from '@apollo/client'
import UserFragment from '../../assets/graphql/client/fragments/UserFragment'


const SignUpForm = () => {
  const dispatchUserData = useDispatchUser()
  const dispatchAuthModal = useDispatchAuthModal()
  const signUpRedirectPath = settings.customerSignUpRedirectPath


  const SignUpMutation = gql`
    mutation SignUpMutation($email: String, $password: String, $confirmPassword: String) {
      signUp(email: $email, password: $password, confirmPassword: $confirmPassword) {
        ...userFields
      }
    }
    ${UserFragment}
  `
  const [signUp, { loading, error, data }] = useMutation(SignUpMutation)


  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          serverError: ''
        }}
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={SignUpSchema}
        onSubmit={(values, { setSubmitting, setFieldError }) => {
          signUp({
            variables: {
              email: values.email,
              password: values.password,
              confirmPassword: values.confirmPassword
            }
          }).then((value) => {
            console.log('1')
            dispatchUserData({
              type: 'LOGIN',
              userData: value.data.signUp
            })
            dispatchAuthModal({
              type: 'CLOSE_SIGN_UP_MODAL'
            })
            Router.push(signUpRedirectPath)
            // console.log(response)
            // setSubmitting(false)
          }).catch(err => {
            console.log('2')
            // console.log(error)
            dispatchUserData({
              type: 'SET_IS_LOADING_FALSE'
            })
            setFieldError('serverError', err.message)
            setSubmitting(false)
          })

          // userUtils.signUp(values.email, values.password, values.confirmPassword)
          //   .then(response => {
          //     dispatchUserData({
          //       type: 'LOGIN',
          //       userData: response.data
          //     })
          //     dispatchAuthModal({
          //       type: 'CLOSE_SIGN_UP_MODAL'
          //     })
          //     Router.push(signUpRedirectPath)
          //     // console.log(response)
          //     // setSubmitting(false)
          //   })
          //   .catch((error) => {
          //     // console.log(error)
          //     dispatchUserData({
          //       type: 'SET_IS_LOADING_FALSE'
          //     })
          //     setFieldError('serverError', error.response.data)
          //     setSubmitting(false)
          //   })
        }}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <ErrorMessage name="serverError" component={FormErrorMessage} />
            <div>
              <Label htmlFor="email">Email address</Label>
              <Field id='email' type="email" name="email" placeholder='you@example.com' as={Input} />
              <ErrorMessage name="email" component={FormErrorMessage} />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Field id='password' type="password" name="password" placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;' as={Input} />
              <ErrorMessage name="password" component={FormErrorMessage} />
            </div>
            <div>
              <Label htmlFor="confirmPassword">Confirm password</Label>
              <Field id='confirmPassword' type="password" name="confirmPassword" placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;' as={Input} />
              <ErrorMessage name="confirmPassword" component={FormErrorMessage} />
            </div>
            <Button type="submit" color='primary' disabled={isSubmitting} className='mt-6 w-full'>
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
    </div >
  )
}






export default SignUpForm