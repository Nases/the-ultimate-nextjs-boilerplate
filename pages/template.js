import Layout from '../components/Layout/Layout'
import LayoutIndent from '../components/Layout/LayoutIndent'
import companyInfo from '../assets/company-info'

const Template = () => {
  var title = `Default title | ${companyInfo.name}`
  var description = 'Default description.'

  return (
    <Layout title={title} description={description}>
      <LayoutIndent>

        {process.env.NEXT_PUBLIC_ENV_LOCAL_VARIABLE}
        <br />
        {process.env.ENV_LOCAL_VARIABLE}
        {/* {process.env.GOOGLE_ANALYTICS_ID} */}

      </LayoutIndent>
    </Layout>
  )
}

export default Template
