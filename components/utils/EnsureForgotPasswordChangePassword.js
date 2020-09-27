import { useState, useEffect } from 'react'
import userUtils from '../../assets/userUtils'
import { useRouter } from 'next/router'

const EnsureForgotPasswordChangePassword = ({ children }) => {

  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    var { email, forgotPasswordToken } = router.query

    if (router.query && email && forgotPasswordToken) {
      userUtils.ensureForgotPasswordChangePassword(email, forgotPasswordToken)
        .then(() => {
          setIsLoading(false)
        })
        .catch(err => {
          // console.log(err)
          router.push('/')
        })
    }

    const ensure = (q) => {
      console.log('dafuq')
      console.log(q)
      if (!q.email) {
        console.log(q)
        router.push('/')
      }
    }

    setTimeout(() => {
      ensure(router.query)
    }, 5000)

  })

  return (
    <>
      {isLoading ? '' : children}
    </>
  )
}

export default EnsureForgotPasswordChangePassword