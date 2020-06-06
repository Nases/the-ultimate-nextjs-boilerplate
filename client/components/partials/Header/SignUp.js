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

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: 0,
      width: '400px'
    }
  }
  // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#__next')

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
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