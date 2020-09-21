import Input from '../form/partials/Input'
import Label from '../form/partials/Label'
import FormErrorMessage from '../form/partials/FormErrorMessage'
import FormSuccessMessage from '../form/partials/FormSuccessMessage'

const FormElements = () => {
  return (
    <>
      <h2>Form Elements</h2>
      <FormSuccessMessage>Form Success Message</FormSuccessMessage>
      <FormErrorMessage>Form Error Message</FormErrorMessage>
      <Label htmlFor='input'>Label</Label>
      <Input id='input' placeholder='Input' />
    </>
  )
}

export default FormElements