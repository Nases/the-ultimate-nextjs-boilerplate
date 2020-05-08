import '../styles/index.css'
import { AuthModalProvider } from '../contexts/AuthModalProvider/AuthModalProvider'

function MyApp({ Component, pageProps }) {
  return (
    <AuthModalProvider>
      <Component {...pageProps} />
    </AuthModalProvider>
  )
}

export default MyApp
