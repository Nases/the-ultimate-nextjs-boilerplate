import { useEffect, useState } from 'react'
import userUtils from '../../assets/userUtils'
import { useUser, useDispatchUser } from '../../contexts/UserProvider/UserProvider'


const EnsureAuth = ({ children }) => {
  const userData = useUser()
  const dispatchUserData = useDispatchUser()

  const [isAuth, setIsAuth] = useState(false)
  useEffect(() => {
    userUtils.ensureAuth()
      .then(response => {
        if (userData._id !== response.data._id) {
          dispatchUserData({ type: 'UPDATE_USER', userData: response.data })
        }
        // console.log(response)
        setIsAuth(true)
      })
      .catch(error => {
        // console.log(error)
        setIsAuth(false)
      })
  }, [])
  return (
    <>
      {isAuth ? children : ''}
    </>
  )
}

export default EnsureAuth