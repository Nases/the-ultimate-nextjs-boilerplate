import { useEffect } from 'react'
import { useUser } from '../../contexts/UserProvider/UserProvider'
import router from 'next/router'


const EnsureAuth = ({ children, roleIdRequired }) => {
  const userData = useUser()

  const isAuth = userData.isAuth
  const isLoading = userData.isLoading
  const roleId = userData.data.roleId

  const redirectNonAuth = () => {
    if (!isAuth || !roleIdRequired.includes(roleId)) {
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