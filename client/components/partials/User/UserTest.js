import { useUser, useDispatchUser } from '../../../contexts/UserProvider/UserProvider'

const UserTest = () => {
  const user = useUser()

  return (
    <pre>
      {JSON.stringify(user, null, 3)}
    </pre>
  )
}

export default UserTest