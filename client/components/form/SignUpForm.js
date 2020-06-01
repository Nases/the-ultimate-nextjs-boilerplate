import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import Input from './Input'
import Label from './Label'
import FormErrorMessage from './FormErrorMessage'
import Button from './Button'

function equalTo(ref, msg) {
  return Yup.mixed().test({
    name: 'equalTo',
    exclusive: false,
    message: msg || '${path} must be the same as ${reference}',
    params: {
      reference: ref.path,
    },
    test: function (value) {
      return value === this.resolve(ref)
    },
  })
}
Yup.addMethod(Yup.string, 'equalTo', equalTo);

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(24, 'Password can be maximum 24 characters')
    .required('Required'),
  confirmPassword: Yup.string().equalTo(Yup.ref('password'), 'Passwords must match').required('Required'),
})

const Basic = () => (
  <div>
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        // axios.post('http://localhost:5000/signup', {
        //   email: 'Fred',
        //   password: 'Flintstone'
        // }, {
        //   headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded'
        //   }
        // })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });


        (async () => {
          const rawResponse = await fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ a: 1, b: 'Textual content' })
          });
          const content = await rawResponse.json();

          console.log(content);
        })();








        // alert(JSON.stringify(values, null, 2))
        setSubmitting(false)


      }}
    >
      {({ isSubmitting, values, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
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
          <button type="submit">Submit</button>
          {/* <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button> */}
          <pre>
            {JSON.stringify(values, null, 2)}
          </pre>
        </Form>
      )}
    </Formik>
  </div >
)

export default Basic