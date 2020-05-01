import Head from 'next/head'
import Header from './partials/Header'
import Footer from './partials/Footer'
import { initGA, logPageView } from '../assets/utils/google-analytics'

export default ({ children, title, description }) => {
  React.useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }, [])

  console.log(process.env.GOOGLE_ANALYTICS_ID)
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div>
        <Header />
        <div className='min-h-screen'>
          {children}
        </div>
        <Footer />
      </div>
    </div>
  )
}