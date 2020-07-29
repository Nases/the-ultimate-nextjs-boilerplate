import Layout from '../components/Layout'
import companyInfo from '../assets/company-info'
import EnsureAuth from '../components/utils/EnsureAuth'
import Template from '../components/Card/UserOptionsCard/Template'
import UserSidebar from '../components/partials/User/UserSidebar'

const Dashboard = () => {

  var title = `Profile | ${companyInfo.name}`
  var description = 'Profile'

  return (
    <EnsureAuth>
      <Layout title={title} description={description}>
        <div className='max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-4 gap-4'>
            <div className='col-span-1'>
              <UserSidebar />
            </div>
            <div className='col-span-3'>
              <Template />
            </div>
          </div>
        </div>
      </Layout>
    </EnsureAuth>
  )
}


export default Dashboard
