import Layout from '../../components/Layout/Layout'
import LayoutIndent from '../../components/Layout/LayoutIndent'
import { companyInfo } from '../../assets/config/settings'
import UserLayout from '../../components/partials/User/UserLayout'
import DashboardStats from '../../components/Stats/DashboardStats'
import EnsureAuth from '../../components/utils/EnsureAuth'


const Dashboard = () => {
  var title = `Admin - Dashboard | ${companyInfo.name}`
  var description = 'Admin dashboard'

  return (
    <EnsureAuth roleIdRequired={[2]}>
      <Layout title={title} description={description}>
        <LayoutIndent>
          <UserLayout>
            <DashboardStats />
          </UserLayout>
        </LayoutIndent>
      </Layout>
    </EnsureAuth>
  )
}

export default Dashboard
