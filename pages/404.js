import Layout from '../components/Layout/Layout'
import LayoutIndent from '../components/Layout/LayoutIndent'
import { companyInfo } from '../assets/config/settings'
import Svg404 from '../components/Svg/Svg404'
import Link from 'next/link'


const NotFound = () => {
  var title = `Page Not Found | ${companyInfo.name}`
  var description = 'This page does not exist.'

  return (
    <Layout title={title} description={description}>
      <LayoutIndent>
        <div className="max-w-3xl mx-auto mt-20">
          <Svg404 />
          <h1 className='text-center text-gray-600 text-2xl md:text-6xl'>Page Not Found</h1>
          <hr />
          <Link href="/">
            <a>
              <h2 className='text-center text-gray-600 mt-4 text-2xl md:text-4xl hover:text-primary-600'><i aria-hidden className="fas fa-arrow-circle-left"></i> Back to <i aria-hidden className="fas fa-home"></i></h2>
            </a>
          </Link>
        </div>
      </LayoutIndent>
    </Layout>
  )
}


export default NotFound