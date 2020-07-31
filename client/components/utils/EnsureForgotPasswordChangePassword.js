import { useState, useEffect } from 'react'
import userUtils from '../../assets/userUtils'
import { useRouter } from 'next/router'

const EnsureForgotPasswordChangePassword = ({ children }) => {

  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const { email, forgotPasswordToken } = router.query
  console.log(email)
  console.log(forgotPasswordToken)


  useEffect(() => {
    userUtils.ensureForgotPasswordChangePassword(email, forgotPasswordToken)
      .then(() => {

        console.log(email)
        console.log(forgotPasswordToken)
      })
      .catch(err => {
        console.log(err)

        console.log(email)
        console.log(forgotPasswordToken)
      })

  }, [])


  return (
    <>
      {children}
    </>
  )
}

export default EnsureForgotPasswordChangePassword