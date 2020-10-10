import Buttons from './Buttons'
import FormElements from './FormElements'
import LoginForm from '../form/LoginForm'
import SignUpForm from '../form/SignUpForm'
import ForgotPasswordForm from '../form/ForgotPasswordForm'

const Divider = () => {
  return (
    <hr className='my-8' />
  )
}

const ComponentShowcase = () => {
  return (
    <>
      <Buttons />
      <Divider />
      <FormElements />
    </>
  )
}

export default ComponentShowcase