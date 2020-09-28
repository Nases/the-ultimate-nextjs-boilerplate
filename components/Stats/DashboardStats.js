import Stats from './Stats'
import StatsContainer from './StatsContainer'
import TotalUsersStats from './TotalUsersStats'

const DashboardStats = () => {
  return (
    <>
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Last 30 days
      </h3>
      <StatsContainer>
        <TotalUsersStats />
        <Stats />
        <Stats />
      </StatsContainer>
    </>
  )
}

export default DashboardStats