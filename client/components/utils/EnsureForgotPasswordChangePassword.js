import { useState, useEffect } from 'react'
import userUtils from '../../assets/userUtils'
import Router, { useRouter } from 'next/router'

const EnsureForgotPasswordChangePassword = ({ children }) => {

  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const { email, forgotPasswordToken } = router.query
  console.log(router.query)
  console.log(Object.keys(router.query).length)

  useEffect(() => {
    if (email && forgotPasswordToken) {
      console.log('yo yo 2')
      userUtils.ensureForgotPasswordChangePassword(email, forgotPasswordToken)
        .then(() => {
          setIsLoading(false)
        })
        .catch(err => {
          // console.log(err)
          Router.push('/')
        })
    } else if (Object.keys(router.query).length > 0) {
      console.log('yo yo')
      if (!email && !forgotPasswordToken) Router.push('/')
    }
  }, [email, forgotPasswordToken])


  return (
    <>
      {isLoading ? '' : children}
    </>
  )
}

export default EnsureForgotPasswordChangePassword