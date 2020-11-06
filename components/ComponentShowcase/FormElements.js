import Input from '../Form/partials/Input'
import Label from '../Form/partials/Label'
import FormErrorMessage from '../Form/partials/FormErrorMessage'
import FormSuccessMessage from '../Form/partials/FormSuccessMessage'


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