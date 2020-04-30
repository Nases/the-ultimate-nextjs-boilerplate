import Head from 'next/head'
import Header from 'Header'
import Footer from 'Footer'
import { initGA, logPageView } from '../assets/utils/google-analytics'

export default ({ children }) => {
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
        <title>NextJS - Express Authentication Starter</title>
      </Head>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
}