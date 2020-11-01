import { useUser } from '../../contexts/UserProvider/UserProvider'


const EnsureNotLoading = ({ children }) => {
  const userData = useUser()
  const isLoading = userData.isLoading

  return (
    <>
      {isLoading ? 'Loading' : children}
    </>
  )
}


export default EnsureNotLoading