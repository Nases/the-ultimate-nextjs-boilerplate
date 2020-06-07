import Modal from 'react-modal'
import { useAuthModal, useDispatchAuthModal } from '../../../contexts/AuthModalProvider/AuthModalProvider'
import SignUpForm from '../../form/SignUpForm'

export const SignUpButton = () => {
  const dispatchAuthModal = useDispatchAuthModal()
  const openModal = () => {
    dispatchAuthModal({ type: 'OPEN_SIGN_UP_MODAL' })
  }

  return (
    <button onClick={openModal} type="button" className="inline-flex items-center font-primary font-semibold uppercase h-10 px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition ease-in-out duration-150">
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
  const openLoginModal = e => {
    dispatchAuthModal({ type: 'OPEN_LOGIN_MODAL' })
  }

  // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#__next')

  return (
    <Modal
      className='m-auto w-11/12 md:w-440px border border-solid border-gray-300 outline-none overflow-auto bg-white'
      overlayClassName='fixed top-0 bottom-0 left-0 right-0 bg-white bg-opacity-75 flex'
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Sign Up Modal"
    >
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 min-w-40">
        <div className="underline-primary text-center">
          <i className="text-primary fas fa-user-plus fa-3x"></i>
          <h2 className="text-common mt-6 text-3xl leading-9 font-extrabold text-common-dark">
            Sign Up
          </h2>
        </div>
        <SignUpForm />
        <div className="mt-3">
          <div className="text-sm leading-5 text-right">
            <span className='text-common' >
              Already have an account?
            </span>
            {' '}
            <button onClick={openLoginModal} className="font-medium text-primary hover:text-primary-dark transition ease-in-out duration-150">
              Log In
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}