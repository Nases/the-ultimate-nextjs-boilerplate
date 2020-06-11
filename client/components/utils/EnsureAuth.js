import { useEffect, useState } from 'react'
import { useUser, useDispatchUser } from '../../contexts/UserProvider/UserProvider'


const EnsureAuth = ({ children }) => {
  const userData = useUser()
  const dispatchUserData = useDispatchUser()

  const [isAuth, setIsAuth] = useState(false)
  useEffect(() => {
    if (userData._id) {
      setIsAuth(true)
    } else {
      setIsAuth(false)
    }
  }, [])
  return (
    <>
      {isAuth ? children : ''}
    </>
  )
}

export default EnsureAuth