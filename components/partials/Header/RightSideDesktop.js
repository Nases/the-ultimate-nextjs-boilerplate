import { useState, useEffect, useRef } from 'react'
import Transition from "../../utils/Transition.js"
import { LoginButton, LoginModal } from './Login'
import { SignUpButton, SignUpModal } from './SignUp'
import { ForgotPasswordModal } from './ForgotPassword'
import { useUser, useDispatchUser } from '../../../contexts/UserProvider/UserProvider'
import ProfileMenuLinks from './ProfileMenuLinks'
import Badge from '../../Badge/Badge'
import Tooltip from '../../Tooltip/Tooltip'


const RightSideDesktop = () => {
  const userData = useUser()

  const [desktopProfileMenuIsOpen, setDesktopProfileMenuIsOpen] = useState(false)
  const desktopProfileMenuNode = useRef()

  useEffect(() => {
    document.addEventListener("mousedown", handleProfileMenuClick)
    document.addEventListener("keydown", handleEscClick)

    return () => {
      document.removeEventListener("mousedown", handleProfileMenuClick)
      document.removeEventListener("keydown", handleEscClick)
    }
  }, [])

  const toggleDropdown = () => {
    setDesktopProfileMenuIsOpen(!desktopProfileMenuIsOpen)
  }

  const handleProfileMenuClick = e => {
    if (userData.isAuth) {
      if (!desktopProfileMenuNode.current.contains(e.target)) {
        // outside click 
        setDesktopProfileMenuIsOpen(false)
      }
    }
  }

  const handleEscClick = e => {
    if (e.keyCode === 27) {
      setDesktopProfileMenuIsOpen(false)
    }
  }


  return (
    <>
      {
        userData.isAuth ?
          // logged in
          <>
            {
              userData.data.roleId === 2
                ? <Tooltip data='Logged in as Admin'><Badge color='teal'>Admin</Badge></Tooltip>
                : ''
            }
            <div ref={desktopProfileMenuNode} className="ml-3 relative">
              <div>
                <button onClick={toggleDropdown} className="flex text-sm border-2 border-transparent rounded-full hover:text-primary transition duration-150 ease-in-out" id="user-menu" aria-label="User menu" aria-haspopup="true">
                  <span>
                    {userData.data.email}
                    {' '}
                    {desktopProfileMenuIsOpen ? <i className="fas fa-angle-up"></i> : <i className="fas fa-angle-down"></i>}
                  </span>
                </button>
              </div>
              <Transition
                show={desktopProfileMenuIsOpen}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                  <div className="py-1 rounded-md bg-white shadow-xs">
                    <ProfileMenuLinks />
                  </div>
                </div>
              </Transition>
            </div>
          </>
          :
          // signed out
          <div className='inline-flex items-center'>
            <LoginButton />
            <span className="ml-2">
              <SignUpButton />
            </span>
            <LoginModal />
            <SignUpModal />
            <ForgotPasswordModal />
          </div>
      }
    </>
  )
}

export default RightSideDesktop