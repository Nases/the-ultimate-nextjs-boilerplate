import Layout from '../../components/Layout/Layout'
import LayoutIndent from '../../components/Layout/LayoutIndent'
import { companyInfo } from '../../assets/config/settings'
import EnsureAuth from '../../components/utils/EnsureAuth'
import UserLayout from '../../components/partials/User/UserLayout'
import ChangePassword from '../../components/partials/User/ChangePassword'
import ChangeEmail from '../../components/partials/User/ChangeEmail'
import ChangePersonalInformation from '../../components/partials/User/ChangePersonalInformation'
import { useUser } from '../../assets/contexts/UserProvider/UserProvider'


const Dashboard = () => {
  var title = `Profile | ${companyInfo.name}`
  var description = 'Profile'

  const userData = useUser()


  return (
    <EnsureAuth roleRequired={['CUSTOMER', 'ADMIN']}>
      <Layout title={title} description={description}>
        <LayoutIndent>
          <UserLayout>
            {
              // if user is registered through OAuth don't show these fields
              userData?.data?.password &&
              <>
                <ChangePassword />
                <ChangeEmail />
              </>
            }
            <ChangePersonalInformation />
          </UserLayout>
        </LayoutIndent>
      </Layout>
    </EnsureAuth >
  )
}


export default Dashboard
