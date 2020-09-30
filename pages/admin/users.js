import Layout from '../../components/Layout/Layout'
import LayoutIndent from '../../components/Layout/LayoutIndent'
import companyInfo from '../../assets/company-info'
import UserLayout from '../../components/partials/User/UserLayout'
import Table from '../../components/Table/Table'
import TableTemplate from '../../components/Table/TableTemplate'


const Users = () => {
  var title = `Admin - Users | ${companyInfo.name}`
  var description = 'Admin - users'

  return (
    <Layout title={title} description={description}>
      <LayoutIndent>
        <UserLayout>
          <TableTemplate />
        </UserLayout>
      </LayoutIndent>
    </Layout>
  )
}

export default Users
