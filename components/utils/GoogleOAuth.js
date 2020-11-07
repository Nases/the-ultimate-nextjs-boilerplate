import { useState, useEffect } from 'react'
import GoogleLogin from 'react-google-login'
import { useDispatchUser } from '../../assets/contexts/UserProvider/UserProvider'
import { useDispatchAuthModal } from '../../assets/contexts/AuthModalProvider/AuthModalProvider'
import { gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import UserFragment from '../../assets/graphql/client/fragments/UserFragment'
import FormErrorMessage from '../Form/partials/FormErrorMessage'
import getRedirectPath from '../../assets/utils/getRedirectPath'


const GoogleOAuth = () => {
  const dispatchUserData = useDispatchUser()
  const dispatchAuthModal = useDispatchAuthModal()
  const router = useRouter()

  const [errorMessage, setErrorMessage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    router.prefetch(getRedirectPath("CUSTOMER", 'logIn'))
  }, [])


  const GoogleOAuthMutation = gql`
    mutation GoogleOAuthMutation($googleID: String, $email: String, $firstName: String, $lastName: String) {
      googleOAuth(googleID: $googleID, email: $email, firstName: $firstName, lastName: $lastName) {
        ...userFields
      }
    }
    ${UserFragment}
  `
  const [googleOAuth] = useMutation(GoogleOAuthMutation)


  const handleResponseGoogle = response => {
    var googleId, email, firstName, lastName
    if (response?.profileObj) {
      googleId = response.profileObj.googleId
      email = response.profileObj.email
      firstName = response.profileObj.givenName
      lastName = response.profileObj.familyName
    }

    if (email && googleId) {
      googleOAuth({
        variables: {
          googleID: googleId,
          email,
          firstName,
          lastName
        }
      }).then(data => {
        dispatchUserData({
          type: 'LOGIN',
          userData: data.data.googleOAuth
        })
        dispatchAuthModal({ type: 'CLOSE_LOGIN_MODAL' })
        dispatchAuthModal({ type: 'CLOSE_SIGN_UP_MODAL' })
        router.push(getRedirectPath(data.data.googleOAuth.role, 'logIn'))
      }).catch(err => {
        setErrorMessage(err.message)
        setIsLoading(false)
      })
    } else {
      setErrorMessage('Something went wrong, please try again later.')
      setIsLoading(false)
    }
  }


  return (
    <GoogleLogin
      clientId={process.env.NEXT_PUBLIC_GOOGLE_APP_ID}
      disabled={isLoading}
      render={renderProps => (
        <>
          <FormErrorMessage className={errorMessage && 'mt-4'}>{errorMessage}</FormErrorMessage>
          <button onClick={() => {
            renderProps.onClick()
            setIsLoading(true)
          }
          } type="button" className={`${renderProps.disabled ? 'opacity-50 cursor-default' : ''} inline-flex items-center w-full px-3 py-2 border border-transparent shadow-md text-md font-semibold rounded-full text-gray-600 bg-white hover:bg-gray-50 focus:outline-none active:bg-gray-100 transition ease-in-out duration-150`}>
            <span className='absolute google-icon w-5 h-5'></span>
            <span className='m-auto'>
              Continue with Google
            </span>
          </button>
        </>
      )}
      buttonText="Login"
      onSuccess={handleResponseGoogle}
      onFailure={handleResponseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  )
}


export default GoogleOAuth