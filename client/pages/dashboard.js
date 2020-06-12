import Layout from '../components/Layout'
import companyInfo from '../assets/company-info'
import UserTest from '../components/partials/User/UserTest'
import Button from '../components/form/partials/Button'
import axios from 'axios'
import { useUser, useDispatchUser } from '../contexts/UserProvider/UserProvider'
import userUtils from '../assets/userUtils'
import EnsureAuth from '../components/utils/EnsureAuth'
import Router from 'next/router'




const Dashboard = () => {
  const userDataDispatch = useDispatchUser()

  var title = `Dashboard | ${companyInfo.name}`
  var description = 'Dashboard'

  const signOut = () => {
    userUtils.signOut()
      .then(response => {
        console.log(response)
        userDataDispatch({ type: 'SIGN_OUT' })
        Router.push('/')
      })
      .catch(error => {
        console.log(error)
        userDataDispatch({ type: 'SIGN_OUT' })
        Router.push('/')
      })
  }

  return (
    <Layout title={title} description={description}>
      <div className='max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8'>
        <UserTest />
        <br />
        <button onClick={signOut}>Sign out</button>
      </div>
    </Layout>
  )
}





export default Dashboard
