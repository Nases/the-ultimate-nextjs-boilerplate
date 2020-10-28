import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Input from './partials/Input'
import Label from './partials/Label'
import FormErrorMessage from './partials/FormErrorMessage'
import FormSuccessMessage from './partials/FormSuccessMessage'
import Button from '../Button/Button'
import { ForgotPasswordSchema } from '../../assets/validation/schemas'
import { useUser, useDispatchUser } from '../../contexts/UserProvider/UserProvider'
import userUtils from '../../assets/userUtils'
import { useAuthModal, useDispatchAuthModal } from '../../contexts/AuthModalProvider/AuthModalProvider'


const ForgotPasswordForm = () => {
  // const userData = useUser()
  const dispatchUserData = useDispatchUser()
  const dispatchAuthModal = useDispatchAuthModal()

  const [successMessage, setSuccessMessage] = useState('')

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          serverError: ''
        }}
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={ForgotPasswordSchema}
        onSubmit={(values, { setSubmitting, setFieldError, resetForm }) => {
          userUtils.forgotPassword(values.email)
            .then(response => {
              console.log(response)
              resetForm()
              setSuccessMessage(`Recovery email sent to ${values.email}, please check your email.`)
              setSubmitting(false)
            })
            .catch(error => {
              setFieldError('serverError', error.response.data)
              setSubmitting(false)
            })
        }}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <FormSuccessMessage>{successMessage}</FormSuccessMessage>
            <ErrorMessage name="serverError" component={FormErrorMessage} />
            <div>
              <Label htmlFor="email">Email address</Label>
              <Field id='email' type="email" name="email" placeholder='you@example.com' as={Input} />
              <ErrorMessage name="email" component={FormErrorMessage} />
            </div>
            <Button type="submit" color='primary' disabled={isSubmitting} className='mt-6 w-full'>
              Send Recovery Email
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ForgotPasswordForm