import { useEffect } from 'react'
import Head from 'next/head'
import Header from '../partials/Header/Header'
import Footer from '../partials/Footer/Footer'
import { initGA, logPageView } from '../../assets/utils/google-analytics'
import EnsureNotLoading from '../utils/EnsureNotLoading'


export default function Layout({ children, title, description }) {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }, [])

  return (
    // <EnsureNotLoading>
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      <div className='min-h-screen'>
        {children}
      </div>
      <Footer />
    </>
    // </EnsureNotLoading>
  )
}