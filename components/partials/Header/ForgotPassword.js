import Modal from 'react-modal'
import { useAuthModal, useDispatchAuthModal } from '../../../contexts/AuthModalProvider/AuthModalProvider'
import ForgotPasswordForm from '../../form/ForgotPasswordForm'

export const ForgotPassword = ({ isMobile = false }) => {
  const dispatchAuthModal = useDispatchAuthModal()
  const openLoginModal = () => {
    dispatchAuthModal({ type: 'OPEN_LOGIN_MODAL' })
  }

  return (
    <button onClick={openLoginModal} type="button" className={isMobile ? "block mt-1 px-4 py-2 hover:border-gray-300 text-gray-500 hover:text-gray-800 hover:bg-gray-100 font-primary font-semibold text-base transition duration-150 ease-in-out" : "inline-flex items-center font-primary font-semibold uppercase hover:text-primary-500 h-10 px-3 py-2 text-sm leading-4 font-medium text-gray-900 transition ease-in-out duration-150"} >
      Log In
    </button >
  )
}

export const ForgotPasswordModal = () => {
  const authModal = useAuthModal()
  const dispatchAuthModal = useDispatchAuthModal()
  const modalIsOpen = authModal.forgotPasswordModal.active
  const closeForgotPasswordModal = () => {
    dispatchAuthModal({ type: 'CLOSE_FORGOT_PASSWORD_MODAL' })
  }
  const openLoginModal = () => {
    dispatchAuthModal({ type: 'OPEN_LOGIN_MODAL' })
  }

  // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#__next')

  return (
    <Modal
      className='m-auto w-11/12 md:w-440px border border-solid border-gray-300 outline-none overflow-auto bg-white rounded-lg'
      overlayClassName='fixed top-0 bottom-0 left-0 right-0 bg-white bg-opacity-75 flex'
      isOpen={modalIsOpen}
      onRequestClose={closeForgotPasswordModal}
      contentLabel="Forgot Password Modal"
    >
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 min-w-40">
        <div className="text-center pb-2">
          <i className="text-primary-500 fas fa-unlock fa-3x"></i>
          <h2 className="text-gray-700 mt-4 text-3xl leading-9 font-extrabold">
            Forgot Password
          </h2>
        </div>
        <ForgotPasswordForm />
        <div className="mt-3">
          <div className="text-sm leading-5 text-right">
            <span className='text-gray-700' >
              Just remembered?
            </span>
            {' '}
            <button onClick={openLoginModal} className="font-medium text-primary-500 hover:text-primary-600 transition ease-in-out duration-150">
              Log In
            </button>
          </div>
        </div>
      </div>
    </Modal >
  )
}