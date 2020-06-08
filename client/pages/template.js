import Layout from '../components/Layout'
import companyInfo from '../assets/company-info'

const Template = () => {
  var title = `Default title | ${companyInfo.name}`
  var description = 'Default description.'

  return (
    <Layout title={title} description={description}>

    </Layout>
  )
}

export default Template
