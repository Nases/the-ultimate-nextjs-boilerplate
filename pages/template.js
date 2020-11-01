import Layout from '../components/Layout/Layout'
import LayoutIndent from '../components/Layout/LayoutIndent'
import { companyInfo } from '../assets/config/settings'


const Template = () => {
  var title = `Default title | ${companyInfo.name}`
  var description = 'Default description.'

  return (
    <Layout title={title} description={description}>
      <LayoutIndent>

      </LayoutIndent>
    </Layout>
  )
}


export default Template
