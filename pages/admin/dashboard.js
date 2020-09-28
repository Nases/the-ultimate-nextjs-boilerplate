import Layout from '../../components/Layout/Layout'
import LayoutIndent from '../../components/Layout/LayoutIndent'
import companyInfo from '../../assets/company-info'
import UserLayout from '../../components/partials/User/UserLayout'
import Stats from '../../components/dataDisplay/Stats'


const Dashboard = () => {
  var title = `Admin - Dashboard | ${companyInfo.name}`
  var description = 'Admin dashboard'

  return (
    <Layout title={title} description={description}>
      <LayoutIndent>
        <UserLayout>
          <Stats />
        </UserLayout>
      </LayoutIndent>
    </Layout>
  )
}

export default Dashboard
