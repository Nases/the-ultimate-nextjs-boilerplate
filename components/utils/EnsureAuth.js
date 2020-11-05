import { useEffect } from 'react'
import { useUser } from '../../assets/contexts/UserProvider/UserProvider'
import router from 'next/router'


const EnsureAuth = ({ children, roleRequired }) => {
  const userData = useUser()
  const isAuth = userData.isAuth
  const isLoading = userData.isLoading
  const role = userData.data.role

  const redirectNonAuth = () => {
    if (!isAuth || !roleRequired.includes(role)) {
      router.push('/')
    }
  }

  useEffect(() => {
    if (!isLoading) redirectNonAuth()
  }, [isLoading])

  return (
    <>
      {isAuth && children}
    </>
  )
}

export default EnsureAuth