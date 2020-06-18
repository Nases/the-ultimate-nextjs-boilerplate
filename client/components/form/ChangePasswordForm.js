import { Formik, Form, Field, ErrorMessage } from 'formik'
import Input from './partials/Input'
import Label from './partials/Label'
import FormErrorMessage from './partials/FormErrorMessage'
import Button from './partials/Button'
import { SignUpSchema } from '../../assets/validation/schemas'
import userUtils from '../../assets/userUtils'
import { useUser, useDispatchUser } from '../../contexts/UserProvider/UserProvider'
import { useAuthModal, useDispatchAuthModal } from '../../contexts/AuthModalProvider/AuthModalProvider'
import Router from 'next/router'


const ChangePassword = () => {
  const dispatchUserData = useDispatchUser()
  const dispatchAuthModal = useDispatchAuthModal()


  return (
    <div>
      <Formik
        initialValues={{
          currentPassword: '',
          password: '',
          confirmPassword: '',
          serverError: ''
        }}
        validateOnBlur={false}
        validationSchema={SignUpSchema}
        onSubmit={(values, { setSubmitting, setFieldError }) => {
          userUtils.signUp(values.currentPassword, values.password, values.confirmPassword)
            .then(response => {
              dispatchUserData({
                type: 'LOGIN',
                userData: response.data
              })
              dispatchAuthModal({
                type: 'CLOSE_SIGN_UP_MODAL'
              })
              Router.push('/dashboard')
              // console.log(response)
              setSubmitting(false)
            })
            .catch((error) => {
              // console.log(error)
              dispatchUserData({
                type: 'SET_IS_LOADING_FALSE'
              })
              setFieldError('serverError', error.response.data)
              setSubmitting(false)
            })
        }}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <ErrorMessage name="serverError" component={FormErrorMessage} />
            <div>
              <Label htmlFor="currentPassword">Current Password</Label>
              <Field id='currentPassword' type="password" name="currentPassword" placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;' as={Input} />
              <ErrorMessage name="currentPassword" component={FormErrorMessage} />
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
            <Button type="submit" disabled={isSubmitting}>
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
    </div >
  )
}






export default ChangePassword