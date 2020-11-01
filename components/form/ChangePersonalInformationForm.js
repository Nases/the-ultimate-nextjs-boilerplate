import { Formik, Form, Field, ErrorMessage } from 'formik'
import Input from './partials/Input'
import Label from './partials/Label'
import FormErrorMessage from './partials/FormErrorMessage'
import Button from '../Button/Button'
import { ChangePersonalInformationSchema } from '../../assets/validation/schemas'
import { useUser, useDispatchUser } from '../../assets/contexts/UserProvider/UserProvider'
import CardBodyRow from '../Card/UserOptionsCard/CardBodyRow'
import CardBodyKey from '../Card/UserOptionsCard/CardBodyKey'
import CardBodyValue from '../Card/UserOptionsCard/CardBodyValue'
import { gql, useMutation } from '@apollo/client'


const ChangePersonalInformationForm = ({ closeAltMenu, showSuccessMessage }) => {
  const dispatchUserData = useDispatchUser()

  const user = useUser()
  const userData = user.data
  const firstName = userData.firstName || ''
  const lastName = userData.lastName || ''


  const ChangePersonalInformationMutation = gql`
    mutation ChangePersonalInformationMutation($firstName: String, $lastName: String) {
      changePersonalInformation(firstName: $firstName, lastName: $lastName)
    }
  `
  const [changePersonalInformation] = useMutation(ChangePersonalInformationMutation)


  return (
    <div>
      <Formik
        initialValues={{
          firstName: firstName,
          lastName: lastName,
          serverError: '',
          successMessage: ''
        }}
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={ChangePersonalInformationSchema}
        onSubmit={(values, { setSubmitting, setFieldError }) => {
          changePersonalInformation({
            variables: {
              firstName: values.firstName,
              lastName: values.lastName
            }
          }).then(data => {
            dispatchUserData({
              type: 'UPDATE_PERSONAL_INFORMATION',
              firstName: values.firstName,
              lastName: values.lastName
            })
            showSuccessMessage(data.data.changePersonalInformation)
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
                <Label htmlFor="firstName" variant='left'>First Name</Label>
              </CardBodyKey>
              <CardBodyValue>
                <Field id='firstName' type="firstName" name="firstName" placeholder='First Name' as={Input} />
                <ErrorMessage name="firstName" component={FormErrorMessage} />
              </CardBodyValue>
            </CardBodyRow>
            <CardBodyRow mb>
              <CardBodyKey>
                <Label htmlFor="lastName" variant='left'>Last Name</Label>
              </CardBodyKey>
              <CardBodyValue>
                <Field id='lastName' type="lastName" name="lastName" placeholder='Last Name' as={Input} />
                <ErrorMessage name="lastName" component={FormErrorMessage} />
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


export default ChangePersonalInformationForm