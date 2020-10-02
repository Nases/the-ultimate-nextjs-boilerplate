import Layout from '../../components/Layout/Layout'
import LayoutIndent from '../../components/Layout/LayoutIndent'
import companyInfo from '../../assets/company-info'
import UserLayout from '../../components/partials/User/UserLayout'
import UsersTable from '../../components/Table/UsersTable'


const Users = () => {
  var title = `Admin - Users | ${companyInfo.name}`
  var description = 'Admin - users'

  return (
    <Layout title={title} description={description}>
      <LayoutIndent>
        <UserLayout>
          <UsersTable />
        </UserLayout>
      </LayoutIndent>
    </Layout>
  )
}

export default Users
