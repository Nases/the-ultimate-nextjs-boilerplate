import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Input from './partials/Input'
import Label from './partials/Label'
import FormErrorMessage from './partials/FormErrorMessage'
import Button from '../Button/Button'
import { ForgotPasswordChangePasswordSchema } from '../../assets/validation/schemas'
import { useDispatchUser } from '../../assets/contexts/UserProvider/UserProvider'
import CardBodyRow from '../Card/UserOptionsCard/CardBodyRow'
import CardBodyKey from '../Card/UserOptionsCard/CardBodyKey'
import CardBodyValue from '../Card/UserOptionsCard/CardBodyValue'
import { useRouter } from 'next/router'
import { gql, useMutation } from '@apollo/client'


const ForgotPasswordChangePasswordForm = () => {
  const dispatchUserData = useDispatchUser()
  const router = useRouter()
  const { email, forgotPasswordToken } = router.query
  const [passwordChanged, setPasswordChanged] = useState(false)

  const ForgotPasswordChangePassword = gql`
    mutation ForgotPasswordChangePassword($email: String, $forgotPasswordToken: String, $newPassword: String, $confirmNewPassword: String) {
      forgotPasswordChangePassword(email: $email, forgotPasswordToken: $forgotPasswordToken, newPassword: $newPassword, confirmNewPassword: $confirmNewPassword)
    }
  `
  const [forgotPasswordChangePassword] = useMutation(ForgotPasswordChangePassword)

  const PasswordChanged = () => {
    return (
      <>
        <h2 className='text-green-400'>
          <i aria-hidden className="fas fa-check-circle"></i>{' '}
          Password Changed
          </h2>
        <p>Your password has been successfully changed.</p>
      </>
    )
  }

  return (
    passwordChanged ? <PasswordChanged /> :
      <div>
        <h2>Recover Password</h2>
        <Formik
          initialValues={{
            newPassword: '',
            confirmNewPassword: '',
            serverError: '',
            successMessage: ''
          }}
          validateOnBlur={false}
          validateOnChange={false}
          validationSchema={ForgotPasswordChangePasswordSchema}
          onSubmit={(values, { setSubmitting, setFieldError, resetForm }) => {
            forgotPasswordChangePassword({
              variables: {
                email,
                forgotPasswordToken,
                newPassword: values.newPassword,
                confirmNewPassword: values.confirmNewPassword
              }
            }).then(data => {
              setPasswordChanged(true)
              resetForm()
              setSubmitting(false)
            }).catch(err => {
              setFieldError('serverError', err.message)
              setSubmitting(false)
            })
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <ErrorMessage name="serverError" component={FormErrorMessage} />
              <CardBodyRow mb='true'>
                <CardBodyKey>
                  <Label htmlFor="newPassword" variant='left'>New Password</Label>
                </CardBodyKey>
                <CardBodyValue>
                  <Field id='newPassword' type="password" name="newPassword" placeholder='Enter new password' as={Input} />
                  <ErrorMessage name="newPassword" component={FormErrorMessage} />
                </CardBodyValue>
              </CardBodyRow>
              <CardBodyRow mb='true'>
                <CardBodyKey>
                  <Label htmlFor="confirmNewPassword" variant='left'>Confirm Password</Label>
                </CardBodyKey>
                <CardBodyValue>
                  <Field id='confirmNewPassword' type="password" name="confirmNewPassword" placeholder='Re-enter new password' as={Input} />
                  <ErrorMessage name="confirmNewPassword" component={FormErrorMessage} />
                </CardBodyValue>
              </CardBodyRow>
              <CardBodyRow>
                <div className='col-span-2'>
                  <Button type="submit" disabled={isSubmitting} color='primary' className='mt-3'>
                    Change Password
                  </Button>
                </div>
              </CardBodyRow>
            </Form>
          )}
        </Formik>
      </div >
  )
}


export default ForgotPasswordChangePasswordForm