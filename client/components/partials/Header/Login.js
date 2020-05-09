import Modal from 'react-modal'
import { useAuthModal, useDispatchAuthModal } from '../../../contexts/AuthModalProvider/AuthModalProvider'

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
        <div className="max-w-md w-full">
          <div className="text-center">
            <i className="fab fa-canadian-maple-leaf fa-3x"></i>
            <h2 className="mt-6 text-3xl leading-9 font-extrabold text-common-dark">
              Sign in to your account
          </h2>
            <p className="mt-2 text-sm leading-5 text-common">
              Or{' '}
              <a onClick={openSignUpModal} href="#" className="font-medium text-primary hover:text-primary-dark transition ease-in-out duration-150">
                start your 14-day free trial
              </a>
            </p>
          </div>
          <form className="mt-8" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm">
              <div>
                <input aria-label="Email address" name="email" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-common-dark rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Email address" />
              </div>
              <div className="-mt-px">
                <input aria-label="Password" name="password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-common-dark rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Password" />
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember_me" type="checkbox" className="htmlForm-checkbox h-4 w-4 text-primary transition duration-150 ease-in-out" />
                <label htmlFor="remember_me" className="ml-2 block text-sm leading-5 text-common-dark">
                  Remember me
              </label>
              </div>
              <div className="text-sm leading-5">
                <a href="#" className="font-medium text-primary hover:text-primary-dark transition ease-in-out duration-150">
                  Forgot your password?
              </a>
              </div>
            </div>
            <div className="mt-6">
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition duration-150 ease-in-out">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal >
  )
}