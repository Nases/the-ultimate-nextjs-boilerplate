import Stats from './Stats'
import { gql, useQuery } from '@apollo/client'


const TotalUsersStats = ({ daysBefore }) => {
  const CountUsersQuery = gql`
    query CountUsersQuery($daysBefore: Int) {
      totalUsers: countUsers
      totalUsersFromDate: countUsers(daysBefore: $daysBefore)
    }
  `
  const { data } = useQuery(CountUsersQuery, {
    fetchPolicy: 'no-cache',
    variables: {
      daysBefore: Number(daysBefore)
    }
  })

  return (
    <Stats
      name='Total Users'
      current={data?.totalUsers}
      from={data?.totalUsersFromDate}
    />
  )
}


export default TotalUsersStats