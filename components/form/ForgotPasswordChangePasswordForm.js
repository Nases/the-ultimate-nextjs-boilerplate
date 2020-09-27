import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Input from './partials/Input'
import Label from './partials/Label'
import FormErrorMessage from './partials/FormErrorMessage'
import Button from '../Button/Button'
import { ChangePasswordSchema } from '../../assets/validation/schemas'
import userUtils from '../../assets/userUtils'
import { useUser, useDispatchUser } from '../../contexts/UserProvider/UserProvider'
import CardBodyRow from '../Card/UserOptionsCard/CardBodyRow'
import CardBodyKey from '../Card/UserOptionsCard/CardBodyKey'
import CardBodyValue from '../Card/UserOptionsCard/CardBodyValue'
import { useRouter } from 'next/router'

const ForgotPasswordChangePassword = () => {
  const dispatchUserData = useDispatchUser()
  const router = useRouter()
  const { email, forgotPasswordToken } = router.query
  const [passwordChanged, setPasswordChanged] = useState(false)

  const PasswordChanged = () => {
    return (
      <>
        <h2 className='text-green-400'>
          <i class="fas fa-check-circle"></i>{' '}
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
            currentPassword: '',
            newPassword: '',
            confirmNewPassword: '',
            serverError: '',
            successMessage: ''
          }}
          validateOnBlur={false}
          validateOnChange={false}
          validationSchema={ChangePasswordSchema}
          onSubmit={(values, { setSubmitting, setFieldError, resetForm }) => {
            userUtils.forgotPasswordChangePassword(email, forgotPasswordToken, values.currentPassword, values.newPassword, values.confirmNewPassword)
              .then(response => {
                console.log(response)
                setPasswordChanged(true)
                resetForm()
                setSubmitting(false)
              })
              .catch((error) => {
                console.log(error)
                setFieldError('serverError', error.response.data)
                setSubmitting(false)
              })
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <ErrorMessage name="serverError" component={FormErrorMessage} />
              <CardBodyRow mb='true'>
                <CardBodyKey>
                  <Label htmlFor="currentPassword" variant='left'>Current Password</Label>
                </CardBodyKey>
                <CardBodyValue>
                  <Field id='currentPassword' type="password" name="currentPassword" placeholder='Enter current password' as={Input} />
                  <ErrorMessage name="currentPassword" component={FormErrorMessage} />
                </CardBodyValue>
              </CardBodyRow>
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
                  <Button type="submit" disabled={isSubmitting} color='gamifyPrimary' className='mt-3'>
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


export default ForgotPasswordChangePassword