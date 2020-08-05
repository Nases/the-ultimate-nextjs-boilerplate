import { Formik, Form, Field, ErrorMessage } from 'formik'
import Input from './partials/Input'
import Label from './partials/Label'
import FormErrorMessage from './partials/FormErrorMessage'
import Button from '../Button/Button'
import { ChangePhoneNumberSchema } from '../../assets/validation/schemas'
import userUtils from '../../assets/userUtils'
import { useUser, useDispatchUser } from '../../contexts/UserProvider/UserProvider'
import CardBodyRow from '../Card/UserOptionsCard/CardBodyRow'
import CardBodyKey from '../Card/UserOptionsCard/CardBodyKey'
import CardBodyValue from '../Card/UserOptionsCard/CardBodyValue'

import Test from './test'

import PhoneInput from 'react-phone-number-input'



const ChangePassword = ({ closeAltMenu, showSuccessMessage }) => {
  const dispatchUserData = useDispatchUser()

  const user = useUser()
  const userData = user.data
  const phoneNumber = userData.phoneNumber || ''


  // const [value, setValue] = React.useState()
  // setValue(prevState => {
  //   return prevState
  // })



  return (
    <div>
      <Formik
        initialValues={{
          phoneNumber: phoneNumber,
          serverError: '',
          successMessage: ''
        }}
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={ChangePhoneNumberSchema}
        onSubmit={(values, { setSubmitting, setFieldError }) => {
          userUtils.changePersonalInformation(values.phoneNumber)
            .then(response => {
              dispatchUserData({
                type: 'UPDATE_PHONE_NUMBER',
                phoneNumber: values.phoneNumber
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
                <Label htmlFor="phoneNumber" variant='left'>Phone Number</Label>
              </CardBodyKey>
              <CardBodyValue>
                <Field id='phoneNumber' type="phoneNumber" name="phoneNumber" placeholder='First Name' as={Input} />
                <Test />
                {/* <PhoneInput
                  placeholder="Enter phone number"
                  value={value}
                  onChange={setValue} /> */}
                <ErrorMessage name="phoneNumber" component={FormErrorMessage} />
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