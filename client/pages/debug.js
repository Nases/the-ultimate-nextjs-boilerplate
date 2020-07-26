import Layout from '../components/Layout'
import companyInfo from '../assets/company-info'
import UserTest from '../components/partials/User/UserTest'
import EnsureAuth from '../components/utils/EnsureAuth'
import ComponentShowcase from '../components/ComponentShowcase/ComponentShowcase'


const Debug = () => {

  var title = `Dashboard | ${companyInfo.name}`
  var description = 'Dashboard'

  return (
    <EnsureAuth>
      <Layout title={title} description={description}>
        <div className='max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8'>
          <UserTest />
          <ComponentShowcase />
        </div>
      </Layout>
    </EnsureAuth>
  )
}


export default Debug
