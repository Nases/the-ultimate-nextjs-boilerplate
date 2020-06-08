import '../styles/index.css'
import { AuthModalProvider } from '../contexts/AuthModalProvider/AuthModalProvider'
import { UserProvider } from '../contexts/UserProvider/UserProvider'

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <AuthModalProvider>
        <Component {...pageProps} />
      </AuthModalProvider>
    </UserProvider>
  )
}

export default MyApp
