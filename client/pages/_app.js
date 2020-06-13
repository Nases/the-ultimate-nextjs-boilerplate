import '../styles/index.css'
import { AuthModalProvider } from '../contexts/AuthModalProvider/AuthModalProvider'
import { UserProvider } from '../contexts/UserProvider/UserProvider'
import { MobileMenuProvider } from '../contexts/MobileMenuProvider/MobileMenuProvider'
import GetUserData from '../components/utils/GetUserData'

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
