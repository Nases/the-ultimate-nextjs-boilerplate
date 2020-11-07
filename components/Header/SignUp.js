import Modal from 'react-modal'
import { useAuthModal, useDispatchAuthModal } from '../../assets/contexts/AuthModalProvider/AuthModalProvider'
import SignUpForm from '../Form/SignUpForm'
import FacebookOAuth from '../utils/FacebookOAuth'
import GoogleOAuth from '../utils/GoogleOAuth'


export const SignUpButton = ({ isMobile = false }) => {
  const dispatchAuthModal = useDispatchAuthModal()
  const openModal = () => {
    dispatchAuthModal({ type: 'OPEN_SIGN_UP_MODAL' })
  }

  return (
    <button onClick={openModal} type="button" className={isMobile ? 'block mt-1 px-4 py-2 hover:border-gray-300 text-gray-500 hover:text-gray-800 hover:bg-gray-100 font-primary font-semibold text-base transition duration-150 ease-in-out' : 'inline-flex items-center font-primary font-semibold uppercase h-10 px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition ease-in-out duration-150'}>
      Sign Up
    </button>
  )
}

export const SignUpModal = () => {
  const authModal = useAuthModal()
  const dispatchAuthModal = useDispatchAuthModal()
  const modalIsOpen = authModal.signUpModal.active
  const closeModal = () => {
    dispatchAuthModal({ type: 'CLOSE_SIGN_UP_MODAL' })
  }
  const openLogInModal = () => {
    dispatchAuthModal({ type: 'OPEN_LOGIN_MODAL' })
  }

  // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#__next')

  return (
    <Modal
      className='m-auto w-11/12 md:w-440px border border-solid border-gray-300 outline-none overflow-auto bg-white rounded-lg'
      overlayClassName='fixed top-0 bottom-0 left-0 right-0 bg-white bg-opacity-75 flex'
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Sign Up Modal"
    >
      <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 min-w-40">
        <div className="text-center pb-2">
          <i className="text-primary-600 fas fa-user-plus fa-3x"></i>
          <h2 className="text-gray-700 mt-4 text-3xl leading-9 font-extrabold">
            Sign Up
          </h2>
        </div>
        <FacebookOAuth />
        <GoogleOAuth />
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm leading-5">
            <span className="px-6 bg-gray-50 text-gray-500">
              or
            </span>
          </div>
        </div>
        <SignUpForm />
        <div className="mt-3">
          <div className="text-sm leading-5 text-right">
            <span className='text-gray-700'>
              Already have an account?
            </span>
            {' '}
            <button onClick={openLogInModal} className="font-medium text-primary-600 hover:text-primary-700 transition ease-in-out duration-150">
              Log In
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}