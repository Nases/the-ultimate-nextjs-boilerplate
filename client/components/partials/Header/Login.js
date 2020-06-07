import Modal from 'react-modal'
import { useAuthModal, useDispatchAuthModal } from '../../../contexts/AuthModalProvider/AuthModalProvider'
import LoginForm from '../../form/LoginForm'

export const LoginButton = () => {
  const dispatchAuthModal = useDispatchAuthModal()
  const openLoginModal = e => {
    dispatchAuthModal({ type: 'OPEN_LOGIN_MODAL' })
  }

  return (
    <button onClick={openLoginModal} type="button" className="inline-flex items-center font-primary font-semibold uppercase hover:text-primary h-10 px-3 py-2 text-sm leading-4 font-medium text-common-dark transition ease-in-out duration-150">
      Log In
    </button>
  )
}

export const LoginModal = () => {
  const authModal = useAuthModal()
  const dispatchAuthModal = useDispatchAuthModal()
  const modalIsOpen = authModal.loginModal.active
  const closeLoginModal = e => {
    dispatchAuthModal({ type: 'CLOSE_LOGIN_MODAL' })
  }
  const openSignUpModal = e => {
    dispatchAuthModal({ type: 'OPEN_SIGN_UP_MODAL' })
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
          <i className="text-primary fas fa-sign-in-alt fa-3x"></i>
          <h2 className="text-common mt-6 text-3xl leading-9 font-extrabold">
            Log In
          </h2>
        </div>
        <LoginForm />
        <div className="mt-3">
          <div className="text-sm leading-5 justify-between flex">
            <button onClick={openSignUpModal} className="font-medium text-common-dark hover:text-primary transition ease-in-out duration-150">
              Create an account
            </button>
            <button className="font-medium text-common-dark hover:text-primary transition ease-in-out duration-150">
              Forgot password
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}