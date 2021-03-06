import { useRouter } from 'next/router'
import Layout from '../../../components/Layout/Layout'
import LayoutIndent from '../../../components/Layout/LayoutIndent'
import { companyInfo } from '../../../assets/config/settings'
import UserLayout from '../../../components/User/UserLayout'
import UserDetails from '../../../components/User/UserDetails'
import EnsureAuth from '../../../components/utils/EnsureAuth'


const User = () => {
  var title = `Admin - User Details | ${companyInfo.name}`
  var description = 'Admin - user details'

  const router = useRouter()
  const { id } = router.query


  return (
    <EnsureAuth roleRequired={['ADMIN']}>
      <Layout title={title} description={description}>
        <LayoutIndent>
          <UserLayout>
            <UserDetails id={id} />
          </UserLayout>
        </LayoutIndent>
      </Layout>
    </EnsureAuth>
  )
}


export default User