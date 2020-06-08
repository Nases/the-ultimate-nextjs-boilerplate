import { useUser, useDispatchUser } from '../../../contexts/UserProvider/UserProvider'

const UserTest = () => {
  const userData = useUser()
  const dispatchUserData = useDispatchUser()

  const userId = userData.id
  const userEmail = userData.email
  const userPassword = userData.password

  // const closeModal = () => {
  //   dispatchAuthModal({ type: 'CLOSE_SIGN_UP_MODAL' })
  // }
  // const openLoginModal = e => {
  //   dispatchAuthModal({ type: 'OPEN_LOGIN_MODAL' })
  // }

  return (
    <div>
      <strong>User authenticated:</strong>
      <br />
      <strong>User id:</strong> {userId}
      <br />
      <strong>User email:</strong> {userEmail}
      <br />
      <strong>User password:</strong> {userPassword}
    </div>
  )
}

export default UserTest