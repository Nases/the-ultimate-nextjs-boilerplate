import { Formik, Form, Field, ErrorMessage } from 'formik'
import axios from 'axios'
import Input from './partials/Input'
import Label from './partials/Label'
import FormErrorMessage from './partials/FormErrorMessage'
import Button from './partials/Button'
import { SignUpSchema } from '../../assets/validation/schemas'


const SignUpForm = () => (
  <div>
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: ''
      }}
      // validationSchema={SignUpSchema}
      onSubmit={(values, { setSubmitting, setFieldError }) => {
        axios.post('http://localhost:5000/signup', {
          email: values.email,
          password: values.password,
          confirmPassword: values.confirmPassword
        })
          .then(response => {
            console.log(response)
            setSubmitting(false)
          })
          .catch((error) => {
            setFieldError('asdasd', 'Something went wrong, please try again later.')
            console.log(error.response)
            setSubmitting(false)
          })
      }}
    >
      {({ isSubmitting, values }) => (
        <Form>
          <ErrorMessage name="asdasd" component={FormErrorMessage} />
          <div>
            <Label htmlFor="email">Email address</Label>
            <Field id='email' type="email" name="email" placeholder='you@example.com' as={Input} />
            <ErrorMessage name="email" component={FormErrorMessage} />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Field id='password' type="password" name="password" placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;' as={Input} />
            <ErrorMessage name="password" component={FormErrorMessage} />
          </div>
          <div>
            <Label htmlFor="confirmPassword">Confirm password</Label>
            <Field id='confirmPassword' type="password" name="confirmPassword" placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;' as={Input} />
            <ErrorMessage name="confirmPassword" component={FormErrorMessage} />
          </div>
          <Button type="submit" disabled={isSubmitting}>
            Sign Up
          </Button>
        </Form>
      )}
    </Formik>
  </div >
)

export default SignUpForm