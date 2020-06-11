import Layout from '../components/Layout'
import companyInfo from '../assets/company-info'
import UserTest from '../components/partials/User/UserTest'
import Button from '../components/form/partials/Button'
import axios from 'axios'
import { useUser, useDispatchUser } from '../contexts/UserProvider/UserProvider'
import userUtils from '../assets/userUtils'
import EnsureAuth from '../components/utils/EnsureAuth'



const Dashboard = () => {
  var title = `Dashboard | ${companyInfo.name}`
  var description = 'Dashboard'

  const ensureAuth = () => {
    userUtils.ensureAuth()
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <Layout title={title} description={description}>
      <EnsureAuth>
        <div className='max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8'>
          <Button onClick={ensureAuth}>hello</Button>
          <UserTest />
        </div>
      </EnsureAuth>
    </Layout>
  )
}





export default Dashboard
