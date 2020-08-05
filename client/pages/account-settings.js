import Layout from '../components/Layout/Layout'
import LayoutIndent from '../components/Layout/LayoutIndent'
import companyInfo from '../assets/company-info'
import EnsureAuth from '../components/utils/EnsureAuth'
import UserLayout from '../components/partials/User/UserLayout'
import ChangePassword from '../components/partials/User/ChangePassword'
import ChangeEmail from '../components/partials/User/ChangeEmail'
import ChangePersonalInformation from '../components/partials/User/ChangePersonalInformation'
import ChangePhoneNumber from '../components/partials/User/ChangePhoneNumber'

const Dashboard = () => {

  var title = `Profile | ${companyInfo.name}`
  var description = 'Profile'

  return (
    <EnsureAuth>
      <Layout title={title} description={description}>
        <LayoutIndent>
          <UserLayout>
            <ChangePhoneNumber />
            <ChangePassword />
            <ChangeEmail />
            <ChangePersonalInformation />
          </UserLayout>
        </LayoutIndent>
      </Layout>
    </EnsureAuth >
  )
}


export default Dashboard
