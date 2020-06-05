const yup = require('yup')

const SignupSchema = yup.object().shape({
  email: yup.string()
    .email('Invalid email')
    .required('Required'),
  password: yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(24, 'Password can be maximum 24 characters')
    .required('Required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
})

module.exports = { SignupSchema }