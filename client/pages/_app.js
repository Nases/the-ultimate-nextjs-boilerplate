import '../styles/index.css'
import { AuthModalProvider } from '../contexts/AuthModalProvider/AuthModalProvider'
import { UserProvider } from '../contexts/UserProvider/UserProvider'
import GetUserData from '../components/utils/GetUserData'

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <AuthModalProvider>
        <GetUserData>
          <Component {...pageProps} />
        </GetUserData>
      </AuthModalProvider>
    </UserProvider>
  )
}

export default MyApp
