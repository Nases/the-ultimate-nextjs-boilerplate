import { useUser, useDispatchUser } from '../../../contexts/UserProvider/UserProvider'

const UserTest = () => {
  const user = useUser()

  return (
    <>
      <h2>User Context</h2>
      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>
    </>
  )
}

export default UserTest