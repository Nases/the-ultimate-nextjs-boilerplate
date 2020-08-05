import * as yup from 'yup'


export const SignUpSchema = yup.object().shape({
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

export const LoginSchema = yup.object().shape({
  email: yup.string()
    .email('Invalid email')
    .required('Required'),
  password: yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(24, 'Password can be maximum 24 characters')
    .required('Required')
})

export const ChangePasswordSchema = yup.object().shape({
  currentPassword: yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(24, 'Password can be maximum 24 characters')
    .required('Required'),
  newPassword: yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(24, 'Password can be maximum 24 characters')
    .required('Required'),
  confirmNewPassword: yup.string()
    .oneOf([yup.ref('newPassword'), null], 'Passwords must match')
    .required('Required'),
})

export const ChangeEmailSchema = yup.object().shape({
  email: yup.string()
    .email('Invalid email')
    .required('Required'),
  password: yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(24, 'Password can be maximum 24 characters')
    .required('Required'),
})

export const ChangePersonalInformationSchema = yup.object().shape({
  firstName: yup.string()
    .min(1, 'First Name must be at least 1 character')
    .max(80, 'First Name can be maximum 80 characters')
    .required('Required'),
  lastName: yup.string()
    .min(1, 'Last Name must be at least 1 character')
    .max(80, 'Last Name can be maximum 80 characters')
    .required('Required'),
})

export const ChangePhoneNumberSchema = yup.object().shape({
  phoneNumber: yup.string()
    .min(1, 'Phone Number must be at least 6 character')
    .max(80, 'First Name can be maximum 80 characters')
    .required('Required')
})

export const ForgotPasswordSchema = yup.object().shape({
  email: yup.string()
    .email('Invalid email')
    .required('Required'),
})
