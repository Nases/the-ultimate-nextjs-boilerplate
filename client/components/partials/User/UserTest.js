import { useUser, useDispatchUser } from '../../../contexts/UserProvider/UserProvider'

const UserTest = () => {
  const user = useUser()
  const userData = user.data
  const isLoading = user.isLoading
  const dispatchUserData = useDispatchUser()

  const userId = userData._id
  const userEmail = userData.email
  const userPassword = userData.password

  return (
    <div>
      <strong>User authenticated:</strong> {userId ? 'true' : 'false'}
      <br />
      <strong>User id:</strong> {userId}
      <br />
      <strong>User email:</strong> {userEmail}
      <br />
      <strong>User password:</strong> {userPassword}
      <br />
      <strong>isLoading:</strong> {isLoading ? 'yes' : 'no'}
    </div>
  )
}

export default UserTest