import Layout from '../../components/Layout/Layout'
import LayoutIndent from '../../components/Layout/LayoutIndent'
import { companyInfo } from '../../assets/config/settings'
import UserLayout from '../../components/User/UserLayout'
import UsersTable from '../../components/Table/UsersTable'
import EnsureAuth from '../../components/utils/EnsureAuth'


const Users = () => {
  var title = `Admin - Users | ${companyInfo.name}`
  var description = 'Admin - users'

  return (
    <EnsureAuth roleRequired={['ADMIN']}>
      <Layout title={title} description={description}>
        <LayoutIndent>
          <UserLayout>
            <UsersTable />
          </UserLayout>
        </LayoutIndent>
      </Layout>
    </EnsureAuth>
  )
}


export default Users
