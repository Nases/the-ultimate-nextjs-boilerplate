import Modal from 'react-modal'
import { useAuthModal, useDispatchAuthModal } from '../../../contexts/AuthModalProvider/AuthModalProvider'
import Input from '../../form/Input'
import Basic from '../../form/Basic'
import Label from '../../form/Label'


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
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: 0
    }
  }
  // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#__next')

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeLoginModal}
      style={customStyles}
      contentLabel="Login Modal"
    >
      <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="min-w-md w-full">
          <div className="text-center">
            <i className="fab fa-canadian-maple-leaf fa-3x"></i>
            <h2 className="mt-6 text-3xl leading-9 font-extrabold text-common-dark">
              Welcome Back
            </h2>
          </div>
          <form className="mt-8" action="#" method="POST" data-parsley-validate>
            <div className="rounded-md shadow-sm">
              Content Here
            </div>
            <div className="mt-6">
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition duration-150 ease-in-out">
                Sign in
              </button>
            </div>
            <div className="mt-3">
              <div className="text-sm leading-5 flex justify-between">
                <button onClick={openSignUpModal} className="font-medium text-primary hover:text-primary-dark transition ease-in-out duration-150">
                  Create account
                </button>
                <button className="font-medium text-primary hover:text-primary-dark transition ease-in-out duration-150">
                  Forgot your password?
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Modal >
  )
}