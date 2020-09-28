import Layout from '../../components/Layout/Layout'
import LayoutIndent from '../../components/Layout/LayoutIndent'
import companyInfo from '../../assets/company-info'
import UserLayout from '../../components/partials/User/UserLayout'
import StatsContainer from '../../components/Stats/StatsContainer'
import Stats from '../../components/Stats/Stats'
import TotalUsersStats from '../../components/Stats/TotalUsersStats'


const Dashboard = () => {
  var title = `Admin - Dashboard | ${companyInfo.name}`
  var description = 'Admin dashboard'

  return (
    <Layout title={title} description={description}>
      <LayoutIndent>
        <UserLayout>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Last 30 days
          </h3>
          <StatsContainer>
            <TotalUsersStats />
            <Stats />
            <Stats />
          </StatsContainer>
        </UserLayout>
      </LayoutIndent>
    </Layout>
  )
}

export default Dashboard
