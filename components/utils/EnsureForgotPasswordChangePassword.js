import { useState, useEffect } from 'react'
import userUtils from '../../assets/userUtils'
import Router, { useRouter } from 'next/router'

const EnsureForgotPasswordChangePassword = ({ children }) => {

  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [isFirstLoad, setIsFirstLoad] = useState(true)
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
    } else if (Object.keys(router.query).length >= 0 && !isFirstLoad) {
      if (!email || !forgotPasswordToken) Router.push('/')
    }
    // setIsFirstLoad(false)
  })

  return (
    <>
      {isLoading ? '' : children}
    </>
  )
}

export default EnsureForgotPasswordChangePassword