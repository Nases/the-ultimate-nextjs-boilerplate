import { Formik, Form, Field, ErrorMessage } from 'formik'
import axios from 'axios'
import Input from './Input'
import Label from './Label'
import FormErrorMessage from './FormErrorMessage'
import Button from './Button'
import { SignupSchema } from '../../assets/validation/schemas'


const Basic = () => (
  <div>
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: ''
      }}
      // validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        axios.post('http://localhost:5000/signup', {
          email: values.email,
          password: values.password,
          confirmPassword: values.confirmPassword
        })
          .then(function (response) {
            console.log(response)
            setSubmitting(false)
          })
          .catch(function (error) {
            console.log(error)
            setSubmitting(false)
          })
      }}
    >
      {({ isSubmitting, values }) => (
        <Form>
          <div>
            <Label htmlFor="email">Email address</Label>
            <Field id='email' type="email" name="email" as={Input} />
            <ErrorMessage name="email" component={FormErrorMessage} />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Field id='password' type="password" name="password" as={Input} />
            <ErrorMessage name="password" component={FormErrorMessage} />
          </div>
          <div>
            <Label htmlFor="confirmPassword">Confirm password</Label>
            <Field id='confirmPassword' type="password" name="confirmPassword" as={Input} />
            <ErrorMessage name="confirmPassword" component={FormErrorMessage} />
          </div>
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  </div >
)

export default Basic