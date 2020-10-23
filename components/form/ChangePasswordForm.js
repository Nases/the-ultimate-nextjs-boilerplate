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


const ChangePassword = ({ closeAltMenu, showSuccessMessage }) => {
  const dispatchUserData = useDispatchUser()


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
          userUtils.changePassword(values.currentPassword, values.newPassword, values.confirmNewPassword)
            .then(response => {
              dispatchUserData({
                type: 'UPDATE_PASSWORD_LAST_UPDATED',
                passwordLastUpdated: Date.now()
              })
              showSuccessMessage(response.data)
              setSubmitting(false)
              closeAltMenu()
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


export default ChangePassword