import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { useDispatchUser } from '../../assets/contexts/UserProvider/UserProvider'
import { useDispatchAuthModal } from '../../assets/contexts/AuthModalProvider/AuthModalProvider'
import { gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import settings from '../../assets/config/settings'
import UserFragment from '../../assets/graphql/client/fragments/UserFragment'


const FacebookOAuth = () => {
  const dispatchUserData = useDispatchUser()
  const dispatchAuthModal = useDispatchAuthModal()
  const router = useRouter()
  const logInRedirectPath = settings.customerLogInRedirectPath


  const FaceBookOAuthMutation = gql`
    mutation FaceBookOAuthMutation($facebookID: String, $email: String) {
      facebookOAuth(facebookID: $facebookID, email: $email) {
        ...userFields
      }
    }
    ${UserFragment}
  `
  const [facebookOAuth] = useMutation(FaceBookOAuthMutation)


  const handleResponseFacebook = response => {
    const { email, id, name } = response
    console.log(name)


    if (email && id) {
      facebookOAuth({
        variables: {
          facebookID: id,
          email
        }
      }).then(data => {
        dispatchUserData({
          type: 'LOGIN',
          userData: data.data.facebookOAuth
        })
        dispatchAuthModal({
          type: 'CLOSE_LOGIN_MODAL'
        })
        dispatchAuthModal({
          type: 'CLOSE_SIGN_UP_MODAL'
        })
        router.push(logInRedirectPath)
      }).catch(err => {
        console.log(err)
      })


    } else {
      // show real error here
      console.log('Something went wrong, please try again later.')
    }



  }

  return (
    <FacebookLogin
      appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}
      fields="name,email,picture"
      callback={handleResponseFacebook}
      render={renderProps => (
        <button onClick={renderProps.onClick} type="button" className="inline-flex items-center w-full px-3 py-2 border border-transparent shadow-sm text-md font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none active:bg-blue-800 transition ease-in-out duration-150">
          <i aria-hidden className="absolute fab fa-facebook fa-lg"></i>
          <span className='m-auto'>
            Continue with Facebook
        </span>
        </button>
      )}
    />
  )
}


export default FacebookOAuth