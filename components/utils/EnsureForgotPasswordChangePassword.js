import { useState, useEffect } from 'react'
import userUtils from '../../assets/userUtils'
import { useRouter } from 'next/router'


const EnsureForgotPasswordChangePassword = ({ children }) => {

  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    var { email, forgotPasswordToken } = router.query

    if (email && forgotPasswordToken) {
      userUtils.ensureForgotPasswordChangePassword(email, forgotPasswordToken)
        .then(() => {
          setIsLoading(false)
        })
        .catch(err => {
          router.push('/')
        })
    }
  })

  return (
    <>
      {isLoading ? '' : children}
    </>
  )
}


export default EnsureForgotPasswordChangePassword