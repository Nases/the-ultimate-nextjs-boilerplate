import Layout from '../components/Layout'
import companyInfo from '../assets/company-info'

export default () => {
  var title = `Default title | ${companyInfo.name}`
  var description = 'Default description'

  return (
    <Layout title={title} description={description}>
      404
    </Layout>
  )
}