import Modal from 'react-modal'
import { useAuthModal, useDispatchAuthModal } from '../../assets/contexts/AuthModalProvider/AuthModalProvider'
import LogInForm from '../form/LogInForm'
import FacebookOAuth from '../utils/FacebookOAuth'


export const LogInButton = ({ isMobile = false }) => {
  const dispatchAuthModal = useDispatchAuthModal()
  const openLogInModal = () => {
    dispatchAuthModal({ type: 'OPEN_LOGIN_MODAL' })
  }

  return (
    <button onClick={openLogInModal} type="button" className={isMobile ? "block mt-1 px-4 py-2 hover:border-gray-300 text-gray-500 hover:text-gray-800 hover:bg-gray-100 font-primary font-semibold text-base transition duration-150 ease-in-out" : "inline-flex items-center font-primary font-semibold uppercase hover:text-primary-600 h-10 px-3 py-2 text-sm leading-4 font-medium text-gray-900 transition ease-in-out duration-150"} >
      Log In
    </button>
  )
}

export const LogInModal = () => {
  const authModal = useAuthModal()
  const dispatchAuthModal = useDispatchAuthModal()
  const modalIsOpen = authModal.logInModal.active
  const closeLogInModal = () => {
    dispatchAuthModal({ type: 'CLOSE_LOGIN_MODAL' })
  }
  const openSignUpModal = () => {
    dispatchAuthModal({ type: 'OPEN_SIGN_UP_MODAL' })
  }
  const openForgotPasswordModal = () => {
    dispatchAuthModal({ type: 'OPEN_FORGOT_PASSWORD_MODAL' })
  }

  // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#__next')



  const handleResponseFacebook = response => {
    const { email, id, name } = response
    console.log(email)
  }


  return (
    <Modal
      className='m-auto w-11/12 md:w-440px border border-solid border-gray-300 outline-none overflow-auto bg-white rounded-lg'
      overlayClassName='fixed top-0 bottom-0 left-0 right-0 bg-white bg-opacity-75 flex'
      isOpen={modalIsOpen}
      onRequestClose={closeLogInModal}
      contentLabel="Log In Modal"
    >
      <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 min-w-40">
        <div className="text-center pb-6">
          <i className="text-primary-600 fas fa-sign-in-alt fa-3x"></i>
          <h2 className="text-gray-700 mt-4 text-3xl leading-9 font-extrabold">
            Log In
          </h2>
        </div>

        <FacebookOAuth />

        <div className='text-center my-4'>or</div>

        <LogInForm />
        <div className="mt-3">
          <div className="text-sm leading-5 justify-between flex">
            <button onClick={openSignUpModal} className="font-medium text-gray-900 hover:text-primary-500 transition ease-in-out duration-150">
              Create an account
            </button>
            <button onClick={openForgotPasswordModal} className="font-medium text-gray-900 hover:text-primary-500 transition ease-in-out duration-150">
              Forgot password
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}