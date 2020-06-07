import { Formik, Form, Field, ErrorMessage } from 'formik'
import axios from 'axios'
import Input from './partials/Input'
import Label from './partials/Label'
import FormErrorMessage from './partials/FormErrorMessage'
import Button from './partials/Button'
import { SignUpSchema } from '../../assets/validation/schemas'


const LoginForm = () => (
  <div>
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={SignUpSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          axios.post('http://localhost:5000/login', {
            email: values.email,
            password: values.password
          })
            .then(response => {
              console.log(response)
              setSubmitting(false)
            })
            .catch(error => {
              console.log(error)
              setSubmitting(false)
            })
        }, 2000)
      }}
    >
      {({ isSubmitting, values }) => (
        <Form>
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
          <Button type="submit" disabled={isSubmitting}>
            Log In
          </Button>
        </Form>
      )}
    </Formik>
  </div >
)

export default LoginForm