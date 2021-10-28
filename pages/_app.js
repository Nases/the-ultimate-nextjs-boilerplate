import '../assets/styles/index.css'
import '../node_modules/nprogress/nprogress.css'
import Head from 'next/head'
import { AuthModalProvider } from '../assets/contexts/AuthModalProvider/AuthModalProvider'
import { UserProvider } from '../assets/contexts/UserProvider/UserProvider'
import { MobileMenuProvider } from '../assets/contexts/MobileMenuProvider/MobileMenuProvider'
import GetUserData from '../components/utils/GetUserData'
import NProgress from 'nprogress'
import Router from 'next/router'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../assets/graphql/client/client'


NProgress.configure({ showSpinner: false })
Router.onRouteChangeStart = () => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => {
  NProgress.done()
}
Router.onRouteChangeError = () => {
  NProgress.done()
}


function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,height=device-height initial-scale=1" />
      </Head>
      <ApolloProvider client={apolloClient}>
        <UserProvider>
          <AuthModalProvider>
            <MobileMenuProvider>
              <GetUserData>
                <Component {...pageProps} />
              </GetUserData>
            </MobileMenuProvider>
          </AuthModalProvider>
        </UserProvider>
      </ApolloProvider>
    </>
  )
}


export default MyApp
