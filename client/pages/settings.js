import Layout from '../components/Layout'
import companyInfo from '../assets/company-info'
import EnsureAuth from '../components/utils/EnsureAuth'
import Template from '../components/Card/UserOptionsCard/Template'

const Dashboard = () => {

  var title = `Profile | ${companyInfo.name}`
  var description = 'Profile'

  return (
    <EnsureAuth>
      <Layout title={title} description={description}>
        <div className='max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8'>
          {/* <ChangePassword /> */}
          <Template />
        </div>
      </Layout>
    </EnsureAuth>
  )
}


export default Dashboard
