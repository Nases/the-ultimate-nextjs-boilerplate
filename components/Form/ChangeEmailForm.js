import { Formik, Form, Field, ErrorMessage } from 'formik'
import Input from './partials/Input'
import Label from './partials/Label'
import FormErrorMessage from './partials/FormErrorMessage'
import Button from '../Button/Button'
import { ChangeEmailSchema } from '../../assets/validation/schemas'
import { useDispatchUser } from '../../assets/contexts/UserProvider/UserProvider'
import CardBodyRow from '../Card/UserOptionsCard/CardBodyRow'
import CardBodyKey from '../Card/UserOptionsCard/CardBodyKey'
import CardBodyValue from '../Card/UserOptionsCard/CardBodyValue'
import { gql, useMutation } from '@apollo/client'


const ChangeEmailForm = ({ closeAltMenu, showSuccessMessage }) => {
  const dispatchUserData = useDispatchUser()

  const ChangeEmailMutation = gql`
    mutation ChangeEmailMutation($email: String, $password:String) {
      changeEmail(email: $email, password: $password)
    }
  `
  const [changeEmail] = useMutation(ChangeEmailMutation)


  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
          serverError: '',
          successMessage: ''
        }}
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={ChangeEmailSchema}
        onSubmit={(values, { setSubmitting, setFieldError }) => {
          changeEmail({
            variables: {
              email: values.email,
              password: values.password
            }
          })
            .then(data => {
              console.log(data.data.changeEmail)
              dispatchUserData({
                type: 'UPDATE_EMAIL',
                email: values.email
              })
              showSuccessMessage(data.data.changeEmail)
              closeAltMenu()
            })
            .catch(err => {
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
                <Label htmlFor="email" variant='left'>New Email</Label>
              </CardBodyKey>
              <CardBodyValue>
                <Field id='email' type="email" name="email" placeholder='you@example.com' as={Input} />
                <ErrorMessage name="email" component={FormErrorMessage} />
              </CardBodyValue>
            </CardBodyRow>
            <CardBodyRow mb>
              <CardBodyKey>
                <Label htmlFor="password" variant='left'>Password</Label>
              </CardBodyKey>
              <CardBodyValue>
                <Field id='password' type="password" name="password" placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;' as={Input} />
                <ErrorMessage name="password" component={FormErrorMessage} />
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


export default ChangeEmailForm