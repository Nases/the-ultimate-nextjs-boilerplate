import { Formik, Form, Field, ErrorMessage } from 'formik'
import Input from './partials/Input'
import Label from './partials/Label'
import FormErrorMessage from './partials/FormErrorMessage'
import Button from '../Button/Button'
import { ChangePasswordSchema } from '../../assets/validation/schemas'
import { useDispatchUser } from '../../assets/contexts/UserProvider/UserProvider'
import CardBodyRow from '../Card/UserOptionsCard/CardBodyRow'
import CardBodyKey from '../Card/UserOptionsCard/CardBodyKey'
import CardBodyValue from '../Card/UserOptionsCard/CardBodyValue'
import { gql, useMutation } from '@apollo/client'


const ChangePasswordForm = ({ closeAltMenu, showSuccessMessage }) => {
  const dispatchUserData = useDispatchUser()

  const ChangePasswordMutation = gql`
    mutation ChangePasswordMutation($currentPassword: String, $newPassword: String, $confirmNewPassword: String) {
      changePassword(currentPassword: $currentPassword, newPassword: $newPassword, confirmNewPassword: $confirmNewPassword)
    }
  `
  const [changePassword] = useMutation(ChangePasswordMutation)


  return (
    <div>
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
        onSubmit={(values, { setSubmitting, setFieldError }) => {
          changePassword({
            variables: {
              currentPassword: values.currentPassword,
              newPassword: values.newPassword,
              confirmNewPassword: values.confirmNewPassword
            }
          }).then(data => {
            dispatchUserData({
              type: 'UPDATE_PASSWORD_LAST_UPDATED',
              passwordLastUpdated: Date.now()
            })
            showSuccessMessage(data.data.changePassword)
            closeAltMenu()
          }).catch(err => {
            setFieldError('serverError', err.message)
            setSubmitting(false)
          })
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <ErrorMessage name="serverError" component={FormErrorMessage} />
            <CardBodyRow mb>
              <CardBodyKey>
                <Label htmlFor="currentPassword" variant='left'>Current Password</Label>
              </CardBodyKey>
              <CardBodyValue>
                <Field id='currentPassword' type="password" name="currentPassword" placeholder='Enter current password' as={Input} />
                <ErrorMessage name="currentPassword" component={FormErrorMessage} />
              </CardBodyValue>
            </CardBodyRow>
            <CardBodyRow mb>
              <CardBodyKey>
                <Label htmlFor="newPassword" variant='left'>New Password</Label>
              </CardBodyKey>
              <CardBodyValue>
                <Field id='newPassword' type="password" name="newPassword" placeholder='Enter new password' as={Input} />
                <ErrorMessage name="newPassword" component={FormErrorMessage} />
              </CardBodyValue>
            </CardBodyRow>
            <CardBodyRow mb>
              <CardBodyKey>
                <Label htmlFor="confirmNewPassword" variant='left'>Confirm Password</Label>
              </CardBodyKey>
              <CardBodyValue>
                <Field id='confirmNewPassword' type="password" name="confirmNewPassword" placeholder='Re-enter new password' as={Input} />
                <ErrorMessage name="confirmNewPassword" component={FormErrorMessage} />
              </CardBodyValue>
            </CardBodyRow>
            <CardBodyRow>
              <div className='col-start-3 col-span-2'>
                <Button type="submit" disabled={isSubmitting} color='primary' className='mt-3 w-full'>
                  Save
                </Button>
              </div>
              <div className='col-span-2'>
                <Button onClick={closeAltMenu} color='secondary' className='mt-3 w-full'>
                  Cancel
                </Button>
              </div>
            </CardBodyRow>
          </Form>
        )}
      </Formik>
    </div>
  )
}


export default ChangePasswordForm