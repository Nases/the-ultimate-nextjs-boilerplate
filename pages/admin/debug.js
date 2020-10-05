import Layout from '../../components/Layout/Layout'
import LayoutIndent from '../../components/Layout/LayoutIndent'
import companyInfo from '../../assets/company-info'
import UserTest from '../../components/partials/User/UserTest'
import EnsureAuth from '../../components/utils/EnsureAuth'
import ComponentShowcase from '../../components/ComponentShowcase/ComponentShowcase'
import UserLayout from '../../components/partials/User/UserLayout'


const Debug = () => {
  var title = `Dashboard | ${companyInfo.name}`
  var description = 'Dashboard'

  return (
    <EnsureAuth roleIdRequired={[2]}>
      <Layout title={title} description={description}>
        <LayoutIndent>
          <UserLayout>
            <UserTest />
            <ComponentShowcase />
          </UserLayout>
        </LayoutIndent>
      </Layout>
    </EnsureAuth>
  )
}


export default Debug
