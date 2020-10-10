import { useEffect, useState } from 'react'
import { useUser, useDispatchUser } from '../../contexts/UserProvider/UserProvider'


const EnsureNotLoading = ({ children }) => {
  const userData = useUser()
  const dispatchUserData = useDispatchUser()

  const isLoading = userData.isLoading

  return (
    <>
      {/* {!isLoading && children} */}
      {isLoading ? 'Loading' : children}
    </>
  )
}

export default EnsureNotLoading