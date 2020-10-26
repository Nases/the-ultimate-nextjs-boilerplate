import { useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Input from './partials/Input'
import Label from './partials/Label'
import FormErrorMessage from './partials/FormErrorMessage'
import Button from '../Button/Button'
import { LoginSchema } from '../../assets/validation/schemas'
import { useUser, useDispatchUser } from '../../contexts/UserProvider/UserProvider'
import userUtils from '../../assets/userUtils'
import { useAuthModal, useDispatchAuthModal } from '../../contexts/AuthModalProvider/AuthModalProvider'
import router from 'next/router'
import settings from '../../assets/settings'
import { gql, useQuery, useLazyQuery } from '@apollo/client'
import UserFragment from '../../assets/graphql/client/fragments/UserFragment'


const LoginForm = () => {
  const dispatchUserData = useDispatchUser()
  const dispatchAuthModal = useDispatchAuthModal()
  const loginRedirectPath = settings.customerLoginRedirectPath

  const LoginQuery = gql`
    query LoginQuery($email: String, $password: String) {
      login(email: $email, password: $password) {
        ...userFields
      }
    }
    ${UserFragment}
  `

  const [login, { data, loading, error }] =
    useLazyQuery(LoginQuery, {
      onCompleted: data => { console.log(data) },
      onError: err => { console.log(err) }
    })


  // const handleLogin = (variables, setSubmitting, setFieldError) => {
  //   console.log('handle Login fired')
  //   useQuery(LoginQuery, {
  //     variables,
  //     onCompleted: data => { console.log(data) },
  //     onError: err => { console.log(err) }
  //   })
  // }

  // if (data?.login?._id) {
  //   dispatchUserData({
  //     type: 'LOGIN',
  //     userData: data.login
  //   })
  //   dispatchAuthModal({
  //     type: 'CLOSE_LOGIN_MODAL'
  //   })
  //   router.push(loginRedirectPath)
  // }
  // if (error) {
  //   dispatchUserData({
  //     type: 'SET_IS_LOADING_FALSE'
  //   })
  //   // setFieldError('serverError', error)
  //   // setSubmitting(false)
  // }



  useEffect(() => {
    router.prefetch(loginRedirectPath)
  }, [])

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
          serverError: ''
        }}
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting, setFieldError }) => {
          // handleLogin({
          //   email: values.email,
          //   password: values.password
          // },
          //   setSubmitting,
          //   setFieldError
          // )
          login({
            variables: {
              email: values.email,
              password: values.password
            }
          })

          // userUtils.login(values.email, values.password)
          //   .then(response => {
          //     dispatchUserData({
          //       type: 'LOGIN',
          //       userData: response.data
          //     })
          //     dispatchAuthModal({
          //       type: 'CLOSE_LOGIN_MODAL'
          //     })
          //     router.push(loginRedirectPath)
          //     // console.log(response.data)
          //     // setSubmitting(false)
          //   })
          //   .catch(error => {
          //     // console.log(error)
          //     dispatchUserData({
          //       type: 'SET_IS_LOADING_FALSE'
          //     })
          //     setFieldError('serverError', error.response.data)
          //     setSubmitting(false)
          //   })



        }}
      >
        {({ isSubmitting, values, setFieldError, setSubmitting }) => {
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

export default LoginForm