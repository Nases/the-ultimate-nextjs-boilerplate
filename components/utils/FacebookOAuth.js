import { useState, useEffect } from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { useDispatchUser } from '../../assets/contexts/UserProvider/UserProvider'
import { useDispatchAuthModal } from '../../assets/contexts/AuthModalProvider/AuthModalProvider'
import { gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import UserFragment from '../../assets/graphql/client/fragments/UserFragment'
import FormErrorMessage from '../Form/partials/FormErrorMessage'
import getRedirectPath from '../../assets/utils/getRedirectPath'


const FacebookOAuth = () => {
  const dispatchUserData = useDispatchUser()
  const dispatchAuthModal = useDispatchAuthModal()
  const router = useRouter()

  const [errorMessage, setErrorMessage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    router.prefetch(getRedirectPath("CUSTOMER", 'logIn'))
  }, [])


  const FacebookOAuthMutation = gql`
    mutation FacebookOAuthMutation($facebookID: String, $email: String, $firstName: String, $lastName: String) {
      facebookOAuth(facebookID: $facebookID, email: $email, firstName: $firstName, lastName: $lastName) {
        ...userFields
      }
    }
    ${UserFragment}
  `
  const [facebookOAuth] = useMutation(FacebookOAuthMutation)


  const handleResponseFacebook = response => {
    const { email, id, name } = response

    if (email && id) {
      if (name) {
        var firstName = name.split(' ').slice(0, -1).join(' ')
        var lastName = name.split(' ').slice(-1).join(' ')
      }

      facebookOAuth({
        variables: {
          facebookID: id,
          email,
          firstName,
          lastName
        }
      }).then(data => {
        dispatchUserData({
          type: 'LOGIN',
          userData: data.data.facebookOAuth
        })
        dispatchAuthModal({ type: 'CLOSE_LOGIN_MODAL' })
        dispatchAuthModal({ type: 'CLOSE_SIGN_UP_MODAL' })
        router.push(getRedirectPath(data.data.facebookOAuth.role, 'logIn'))
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
    <FacebookLogin
      appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}
      fields="name,email"
      callback={handleResponseFacebook}
      isDisabled={isLoading}
      onClick={() => setIsLoading(true)}
      disableMobileRedirect={true}
      render={renderProps => (
        <>
          <FormErrorMessage>{errorMessage}</FormErrorMessage>
          <button onClick={renderProps.onClick} type="button" className={`${renderProps.isDisabled ? 'opacity-50 cursor-default' : ''} inline-flex items-center w-full px-3 py-2 border border-transparent shadow-md text-md font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none active:bg-blue-800 transition ease-in-out duration-150`}>
            <i aria-hidden className="absolute fab fa-facebook fa-lg"></i>
            <span className='m-auto'>
              Continue with Facebook
            </span>
          </button>
        </>
      )}
    />
  )
}


export default FacebookOAuth