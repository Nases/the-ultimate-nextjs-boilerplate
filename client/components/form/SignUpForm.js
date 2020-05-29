import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Input from './Input'
import Label from './Label'
import FormErrorMessage from './FormErrorMessage'
import Button from './Button'

console.log(process.env.MONGODB_URI)

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
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(24, 'Password can be maximum 24 characters')
    .required('Required'),
  passwordConfirm: Yup.string().equalTo(Yup.ref('password'), 'Passwords must match').required('Required'),
})

const Basic = () => (
  <div>
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
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
            <Label htmlFor="passwordConfirm">Confirm password</Label>
            <Field id='passwordConfirm' type="password" name="passwordConfirm" as={Input} />
            <ErrorMessage name="passwordConfirm" component={FormErrorMessage} />
          </div>
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
          <pre>
            {JSON.stringify(values, null, 2)}
          </pre>
        </Form>
      )}
    </Formik>
  </div>
)

export default Basic