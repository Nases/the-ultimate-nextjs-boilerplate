import Input from '../form/partials/Input'
import Label from '../form/partials/Label'
import FormErrorMessage from '../form/partials/FormErrorMessage'
import FormSuccessMessage from '../form/partials/FormSuccessMessage'

const FormElements = () => {
  return (
    <>
      <Label htmlFor='input'>Label</Label>
      <Input id='input' />
      <FormErrorMessage>Form Error Message</FormErrorMessage>
      <FormSuccessMessage value='Form Success Message' /> {/* fail */}
    </>
  )
}

export default FormElements