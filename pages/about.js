import Layout from '../components/Layout/Layout'
import LayoutIndent from '../components/Layout/LayoutIndent'
import { companyInfo } from '../assets/settings'

const About = () => {
  var title = `Default title | ${companyInfo.name}`
  var description = 'Default description.'

  return (
    <Layout title={title} description={description}>
      <LayoutIndent>
        About page
      </LayoutIndent>
    </Layout>
  )
}

export default About
