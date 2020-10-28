import { useUser, useDispatchUser } from '../../contexts/UserProvider/UserProvider'


const EnsureNotLoading = ({ children }) => {
  const userData = useUser()
  const dispatchUserData = useDispatchUser()

  const isLoading = userData.isLoading

  return (
    <>
      {isLoading ? 'Loading' : children}
    </>
  )
}

export default EnsureNotLoading