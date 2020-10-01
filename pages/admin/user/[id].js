import { useRouter } from 'next/router'
import Layout from '../../../components/Layout/Layout'
import LayoutIndent from '../../../components/Layout/LayoutIndent'
import companyInfo from '../../../assets/company-info'
import UserLayout from '../../../components/partials/User/UserLayout'

const User = () => {
  var title = `Admin - Users | ${companyInfo.name}`
  var description = 'Admin - users'

  const router = useRouter()
  const { id } = router.query


  return (
    <Layout title={title} description={description}>
      <LayoutIndent>
        <UserLayout>
          {id || ''}
        </UserLayout>
      </LayoutIndent>
    </Layout>
  )
}

export default User