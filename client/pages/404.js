import Layout from '../components/Layout/Layout'
import LayoutIndent from '../components/Layout/LayoutIndent'
import companyInfo from '../assets/company-info'
import Svg404 from '../components/svg/Svg404'

export default () => {
  var title = `Page Not Found | ${companyInfo.name}`
  var description = 'This page does not exist.'

  return (
    <Layout title={title} description={description}>
      <LayoutIndent>
        <div className="max-w-3xl mx-auto mt-20">
          <Svg404 />
          <h1 className='text-center text-gray-600 text-2xl md:text-6xl'>Page Not Found</h1>
        </div>
      </LayoutIndent>
    </Layout>
  )
}