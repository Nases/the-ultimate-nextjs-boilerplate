import { useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Input from './partials/Input'
import Label from './partials/Label'
import FormErrorMessage from './partials/FormErrorMessage'
import Button from '../Button/Button'
import { SignUpSchema } from '../../assets/validation/schemas'
import { useDispatchUser } from '../../assets/contexts/UserProvider/UserProvider'
import { useDispatchAuthModal } from '../../assets/contexts/AuthModalProvider/AuthModalProvider'
import { useRouter } from 'next/router'
import { gql, useMutation } from '@apollo/client'
import UserFragment from '../../assets/graphql/client/fragments/UserFragment'
import getRedirectPath from '../../assets/utils/getRedirectPath'


const SignUpForm = () => {
  const dispatchUserData = useDispatchUser()
  const dispatchAuthModal = useDispatchAuthModal()
  const router = useRouter()

  const SignUpMutation = gql`
    mutation SignUpMutation($email: String, $password: String, $confirmPassword: String) {
      signUp(email: $email, password: $password, confirmPassword: $confirmPassword) {
        ...userFields
      }
    }
    ${UserFragment}
  `
  const [signUp] = useMutation(SignUpMutation)


  useEffect(() => {
    router.prefetch(getRedirectPath("CUSTOMER", 'signUp'))
  }, [])


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
            dispatchUserData({
              type: 'LOGIN',
              userData: value.data.signUp
            })
            dispatchAuthModal({
              type: 'CLOSE_SIGN_UP_MODAL'
            })
            router.push(getRedirectPath(value.data.signUp.role, 'signUp'))
          }).catch(err => {
            dispatchUserData({
              type: 'SET_IS_LOADING_FALSE'
            })
            setFieldError('serverError', err.message)
            setSubmitting(false)
          })
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