import { useUser, useDispatchUser } from '../../contexts/UserProvider/UserProvider'
import { useRouter } from 'next/router'

const EnsureNotLoading = ({ children }) => {
  const userData = useUser()
  const dispatchUserData = useDispatchUser()
  const router = useRouter()

  const isLoading = userData.isLoading
  const isHomePage = (router.pathname === '/')

  return (
    <>
      {isHomePage ? children : isLoading ? 'Loading' : children}
    </>
  )
}

export default EnsureNotLoading