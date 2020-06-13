import Layout from '../components/Layout'
import companyInfo from '../assets/company-info'
import UserTest from '../components/partials/User/UserTest'
import { useUser, useDispatchUser } from '../contexts/UserProvider/UserProvider'


const Dashboard = () => {
  const userDataDispatch = useDispatchUser()

  var title = `Dashboard | ${companyInfo.name}`
  var description = 'Dashboard'

  return (
    <Layout title={title} description={description}>
      <div className='max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8'>
        <UserTest />
      </div>
    </Layout>
  )
}


export default Dashboard
