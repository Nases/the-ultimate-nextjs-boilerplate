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


const ChangePassword = ({ closeAltMenu }) => {
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
            <div className='sm:grid sm:grid-cols-6 sm:gap-4'>
              <div className='col-span-1 text-common text-sm'>
                <Label htmlFor="currentPassword">Current Password</Label>
              </div>
              <div className='col-span-5 text-common'>
                <Field id='currentPassword' type="password" name="currentPassword" placeholder='Enter current password' as={Input} />
                <ErrorMessage name="currentPassword" component={FormErrorMessage} />
              </div>
            </div>
            <div className='sm:grid sm:grid-cols-6 sm:gap-4'>
              <div className='col-span-1 text-common text-sm'>
                <Label htmlFor="password">New Password</Label>
              </div>
              <div className='col-span-5 text-common'>
                <Field id='password' type="password" name="password" placeholder='Enter new password' as={Input} />
                <ErrorMessage name="password" component={FormErrorMessage} />
              </div>
            </div>
            <div className='sm:grid sm:grid-cols-6 sm:gap-4'>
              <div className='col-span-1 text-common text-sm'>
                <Label htmlFor="confirmPassword">Confirm password</Label>
              </div>
              <div className='col-span-5 text-common'>
                <Field id='confirmPassword' type="password" name="confirmPassword" placeholder='Re-enter new password' as={Input} />
                <ErrorMessage name="confirmPassword" component={FormErrorMessage} />
              </div>
            </div>
            <Button type="submit" disabled={isSubmitting}>
              Sign Up
            </Button>
            <Button onClick={closeAltMenu}>
              Cancel
            </Button>
          </Form>
        )}
      </Formik>
    </div >
  )
}






export default ChangePassword