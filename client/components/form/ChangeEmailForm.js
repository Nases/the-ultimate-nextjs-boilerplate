import { Formik, Form, Field, ErrorMessage } from 'formik'
import Input from './partials/Input'
import Label from './partials/Label'
import FormErrorMessage from './partials/FormErrorMessage'
import Button from '../Button/Button'
import { ChangeEmailSchema } from '../../assets/validation/schemas'
import userUtils from '../../assets/userUtils'
import { useUser, useDispatchUser } from '../../contexts/UserProvider/UserProvider'
import CardBodyRow from '../Card/UserOptionsCard/CardBodyRow'
import CardBodyKey from '../Card/UserOptionsCard/CardBodyKey'
import CardBodyValue from '../Card/UserOptionsCard/CardBodyValue'


const ChangePassword = ({ closeAltMenu, showSuccessMessage }) => {
  const dispatchUserData = useDispatchUser()

  const user = useUser()
  const userData = user.data
  const userEmail = userData.email


  return (
    <div>
      <Formik
        initialValues={{
          email: userEmail,
          serverError: '',
          successMessage: ''
        }}
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={ChangeEmailSchema}
        onSubmit={(values, { setSubmitting, setFieldError }) => {
          userUtils.changeEmail(values.email)
            .then(response => {
              dispatchUserData({
                type: 'UPDATE_EMAIL',
                email: values.email
              })
              showSuccessMessage(response.data)
              closeAltMenu()
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
            <CardBodyRow mb>
              <CardBodyKey>
                <Label htmlFor="email" variant='left'>Email</Label>
              </CardBodyKey>
              <CardBodyValue>
                <Field id='email' type="email" name="email" as={Input} />
                <ErrorMessage name="email" component={FormErrorMessage} />
              </CardBodyValue>
            </CardBodyRow>
            <CardBodyRow>
              <div className='col-start-3 col-span-2'>
                <Button type="submit" disabled={isSubmitting} color='gamifyPrimary' className='mt-3 w-full'>
                  Save
                </Button>
              </div>
              <div className='col-span-2'>
                <Button onClick={closeAltMenu} color='gamifySecondary' className='mt-3 w-full'>
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