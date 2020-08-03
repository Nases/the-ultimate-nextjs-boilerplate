import '../styles/index.css'
import '../node_modules/nprogress/nprogress.css'
import 'balloon-css';
import { AuthModalProvider } from '../contexts/AuthModalProvider/AuthModalProvider'
import { UserProvider } from '../contexts/UserProvider/UserProvider'
import { MobileMenuProvider } from '../contexts/MobileMenuProvider/MobileMenuProvider'
import GetUserData from '../components/utils/GetUserData'

import NProgress from 'nprogress'
import Router from 'next/router'

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
  return (
    <UserProvider>
      <AuthModalProvider>
        <MobileMenuProvider>
          <GetUserData>
            <Component {...pageProps} />
          </GetUserData>
        </MobileMenuProvider>
      </AuthModalProvider>
    </UserProvider>
  )
}

export default MyApp
