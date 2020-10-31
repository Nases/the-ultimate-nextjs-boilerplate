import { useState } from 'react'
import { useRouter } from 'next/router'
import { gql, useMutation } from '@apollo/client'


const EnsureForgotPasswordChangePassword = ({ children }) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  var { email, forgotPasswordToken } = router?.query

  const ForgotPasswordChangePasswordEnsure = gql`
    mutation ForgotPasswordChangePasswordEnsure($email: String, $forgotPasswordToken: String) {
      forgotPasswordChangePasswordEnsure(email: $email, forgotPasswordToken: $forgotPasswordToken)
    }
  `
  const [forgotPasswordChangePasswordEnsure] = useMutation(ForgotPasswordChangePasswordEnsure)

  if (email && forgotPasswordToken) {
    forgotPasswordChangePasswordEnsure({
      variables: { email, forgotPasswordToken }
    }).then(data => {
      isLoading && setIsLoading(false)
    }).catch(err => {
      router.push('/')
    })
  }

  return (
    <>
      {isLoading ? '' : children}
    </>
  )
}


export default EnsureForgotPasswordChangePassword