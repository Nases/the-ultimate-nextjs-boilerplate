import Head from 'next/head'
import Header from './partials/Header/Header'
import Footer from './partials/Footer/Footer'
import { initGA, logPageView } from '../assets/utils/google-analytics'

export default function Layout({ children, title, description }) {
  React.useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }, [])

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