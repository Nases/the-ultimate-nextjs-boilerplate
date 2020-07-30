import Buttons from './Buttons'
import FormElements from './FormElements'
import LoginForm from '../form/LoginForm'
import SignUpForm from '../form/SignUpForm'

const Divider = () => {
  return (
    <hr className='my-8' />
  )
}

const ComponentShowcase = () => {
  return (
    <>
      <Divider />
      <Buttons />
      <Divider />
      <FormElements />
      <Divider />
      <h2>Login Form</h2>
      <LoginForm />
      <Divider />
      <h2>Sign Up Form</h2>
      <SignUpForm />
    </>
  )
}

export default ComponentShowcase