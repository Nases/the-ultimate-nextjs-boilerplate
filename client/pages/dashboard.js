import Layout from '../components/Layout'
import companyInfo from '../assets/company-info'
import UserTest from '../components/partials/User/UserTest'
import axios from 'axios'
import { useUser, useDispatchUser } from '../contexts/UserProvider/UserProvider'


const Dashboard = () => {
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


export async function getServerSideProps() {

  // const userData = useUser()
  // const dispatchUserData = useDispatchUser()

  axios.post('http://localhost:5000/ensure-auth', {
    asd: 'asd'
  }, {
    withCredentials: true
  })
    .then(response => {
      // dispatchUserData({
      //   type: 'UPDATE_USER',
      //   userData: response.data
      // })
      console.log(response.data)
    })
    .catch(error => {
      console.log(error.response.statusText)
    })



  return {
    props: {
      hello: 'world',
    },
  }

}




export default Dashboard
