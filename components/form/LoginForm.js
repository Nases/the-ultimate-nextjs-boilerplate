import { useEffect, useRef } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Input from './partials/Input'
import Label from './partials/Label'
import FormErrorMessage from './partials/FormErrorMessage'
import Button from '../Button/Button'
import { LoginSchema } from '../../assets/validation/schemas'
import { useDispatchUser } from '../../assets/contexts/UserProvider/UserProvider'
import { useDispatchAuthModal } from '../../assets/contexts/AuthModalProvider/AuthModalProvider'
import router from 'next/router'
import settings from '../../assets/config/settings'
import { gql, useLazyQuery } from '@apollo/client'
import UserFragment from '../../assets/graphql/client/fragments/UserFragment'


const LogInForm = () => {
  const dispatchUserData = useDispatchUser()
  const dispatchAuthModal = useDispatchAuthModal()
  const loginRedirectPath = settings.customerLoginRedirectPath

  const logInForm = useRef(null)

  const LogInQuery = gql`
    query LogInQuery($email: String, $password: String) {
      logIn(email: $email, password: $password) {
        ...userFields
      }
    }
    ${UserFragment}
  `

  const [logIn] =
    useLazyQuery(LogInQuery, {
      fetchPolicy: 'no-cache',
      onCompleted: data => {
        if (data?.logIn?._id) {
          dispatchUserData({
            type: 'LOGIN',
            userData: data.logIn
          })
          dispatchAuthModal({
            type: 'CLOSE_LOGIN_MODAL'
          })
          router.push(loginRedirectPath)
        } else {
          logInForm.current.setFieldError('serverError', 'Something went wrong, please try again later.')
          logInForm.current.setSubmitting(false)
        }
      },
      onError: err => {
        dispatchUserData({
          type: 'SET_IS_LOADING_FALSE'
        })
        logInForm.current.setFieldError('serverError', err.message)
        logInForm.current.setSubmitting(false)
      }
    })


  useEffect(() => {
    router.prefetch(loginRedirectPath)
  }, [])

  return (
    <div>
      <Formik
        innerRef={logInForm}
        initialValues={{
          email: '',
          password: '',
          serverError: ''
        }}
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={LoginSchema}
        onSubmit={values => {
          logIn({
            variables: {
              email: values.email,
              password: values.password
            }
          })
        }}
      >
        {({ isSubmitting }) => {
          return (
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
              <Button type="submit" color='primary' disabled={isSubmitting} className='mt-6 w-full'>
                Log In
            </Button>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}


export default LogInForm