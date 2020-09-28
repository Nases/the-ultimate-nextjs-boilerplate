import Layout from '../../components/Layout/Layout'
import LayoutIndent from '../../components/Layout/LayoutIndent'
import companyInfo from '../../assets/company-info'
import UserLayout from '../../components/partials/User/UserLayout'
import StatsContainer from '../../components/Stats/StatsContainer'
import Stats from '../../components/Stats/Stats'
import TotalUsersStats from '../../components/Stats/TotalUsersStats'
import SelectTemplate from '../../components/Select/SelectTemplate'
import DashboardStats from '../../components/Stats/DashboardStats'



const Dashboard = () => {
  var title = `Admin - Dashboard | ${companyInfo.name}`
  var description = 'Admin dashboard'

  return (
    <Layout title={title} description={description}>
      <LayoutIndent>
        <UserLayout>
          <DashboardStats />
          <div className='mt-10'>
            <SelectTemplate />
          </div>
        </UserLayout>
      </LayoutIndent>
    </Layout>
  )
}

export default Dashboard
