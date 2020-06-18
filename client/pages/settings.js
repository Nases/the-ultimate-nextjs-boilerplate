import Layout from '../components/Layout'
import companyInfo from '../assets/company-info'
import EnsureAuth from '../components/utils/EnsureAuth'
import ChangePasswordForm from '../components/form/ChangePasswordForm'

const Dashboard = () => {

  var title = `Dashboard | ${companyInfo.name}`
  var description = 'Dashboard'

  return (
    <EnsureAuth>
      <Layout title={title} description={description}>
        <div className='max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8'>
          Change Password
          <ChangePasswordForm />
        </div>
      </Layout>
    </EnsureAuth>
  )
}


export default Dashboard
