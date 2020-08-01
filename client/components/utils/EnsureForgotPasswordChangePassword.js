import { useState, useEffect } from 'react'
import userUtils from '../../assets/userUtils'
import Router, { useRouter } from 'next/router'

const EnsureForgotPasswordChangePassword = ({ children }) => {

  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const { email, forgotPasswordToken } = router.query


  useEffect(() => {
    if (email && forgotPasswordToken) {
      userUtils.ensureForgotPasswordChangePassword(email, forgotPasswordToken)
        .then(() => {
          setIsLoading(false)
        })
        .catch(err => {
          // console.log(err)
          Router.push('/')
        })
    }
  }, [email, forgotPasswordToken])


  return (
    <>
      {isLoading ? '' : children}
    </>
  )
}

export default EnsureForgotPasswordChangePassword