import Modal from 'react-modal'
import { useAuthModal, useDispatchAuthModal } from '../../../contexts/AuthModalProvider/AuthModalProvider'
import LoginForm from '../../form/LoginForm'

export const LoginButton = ({ isMobile = false }) => {
  const dispatchAuthModal = useDispatchAuthModal()
  const openLoginModal = () => {
    dispatchAuthModal({ type: 'OPEN_LOGIN_MODAL' })
  }

  return (
    <button onClick={openLoginModal} type="button" className={isMobile ? "block mt-1 px-4 py-2 hover:border-gray-300 text-gray-500 hover:text-gray-800 hover:bg-gray-100 font-primary font-semibold text-base transition duration-150 ease-in-out" : "inline-flex items-center font-primary font-semibold uppercase hover:text-primary-600 h-10 px-3 py-2 text-sm leading-4 font-medium text-gray-900 transition ease-in-out duration-150"} >
      Log In
    </button >
  )
}

export const LoginModal = () => {
  const authModal = useAuthModal()
  const dispatchAuthModal = useDispatchAuthModal()
  const modalIsOpen = authModal.loginModal.active
  const closeLoginModal = () => {
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

  return (
    <Modal
      className='m-auto w-11/12 md:w-440px border border-solid border-gray-300 outline-none overflow-auto bg-white rounded-lg'
      overlayClassName='fixed top-0 bottom-0 left-0 right-0 bg-white bg-opacity-75 flex'
      isOpen={modalIsOpen}
      onRequestClose={closeLoginModal}
      contentLabel="Login Modal"
    >
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 min-w-40">
        <div className="underline-primary text-center">
          <i className="text-primary-500 fas fa-sign-in-alt fa-3x"></i>
          <h2 className="text-gray-700 mt-6 text-3xl leading-9 font-extrabold">
            Log In
          </h2>
        </div>
        <LoginForm />
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