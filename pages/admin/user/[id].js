import { useRouter } from 'next/router'
import Layout from '../../../components/Layout/Layout'
import LayoutIndent from '../../../components/Layout/LayoutIndent'
import companyInfo from '../../../assets/company-info'
import UserLayout from '../../../components/partials/User/UserLayout'
import UserDetails from '../../../components/User/UserDetails'

const User = () => {
  var title = `Admin - User Details | ${companyInfo.name}`
  var description = 'Admin - user details'

  const router = useRouter()
  const { id } = router.query


  return (
    <Layout title={title} description={description}>
      <LayoutIndent>
        <UserLayout>
          <UserDetails />
          {id || ''}
        </UserLayout>
      </LayoutIndent>
    </Layout>
  )
}

export default User