import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Transition from "../../utils/Transition.js"
import { LoginButton, LoginModal } from './Login'
import { SignUpButton, SignUpModal } from './SignUp'
import { useUser, useDispatchUser } from '../../../contexts/UserProvider/UserProvider'
import MainMenuLinks from './MainMenuLinks'
import ProfileMenuLinks from './ProfileMenuLinks'
import RightSideDesktop from './RightSideDesktop'

const Header = () => {
  const userData = useUser()

  // profile dropdown logic start
  // const [desktopProfileMenuIsOpen, setDesktopProfileMenuIsOpen] = useState(false)
  const [mobileMenuIsOpen, setmobileMenuIsOpen] = useState(false)
  // const desktopProfileMenuNode = useRef()
  const mobileMenuNode = useRef()
  const mobileProfileMenuButtonNode = useRef()

  useEffect(() => {
    if (userData.isAuth) {
      document.addEventListener("mousedown", handleProfileMenuClick)
      document.addEventListener("keydown", handleEscClick)
    }

    return () => {
      if (userData.isAuth) {
        document.removeEventListener("mousedown", handleProfileMenuClick)
        document.removeEventListener("keydown", handleEscClick)
      }
    }
  }, [])
  const toggleDropdown = () => {
    // setDesktopProfileMenuIsOpen(!desktopProfileMenuIsOpen)
    setmobileMenuIsOpen(!mobileMenuIsOpen)
  }

  const handleProfileMenuClick = e => {
    // if (!desktopProfileMenuNode.current.contains(e.target)) {
    //   // outside click 
    //   setDesktopProfileMenuIsOpen(false)
    // }
    if (!mobileMenuNode.current.contains(e.target) && !mobileProfileMenuButtonNode.current.contains(e.target)) {
      // outside click 
      setmobileMenuIsOpen(false)
    }
  }
  const handleEscClick = e => {
    if (e.keyCode === 27) {
      // setDesktopProfileMenuIsOpen(false)
      setmobileMenuIsOpen(false)
    }
  }
  // profile dropdown end



  return (
    <>
      <div className='headerBefore'></div>
      <nav className="header bg-white shadow-sm sm:sticky top-0">
        <div className="max-w-7xl mx-auto pt-1 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* logo & main menu items */}
            <div className="flex">
              {/* logo */}
              <Link href="/">
                <a className="flex-shrink-0 flex items-center">
                  <img className="hidden lg:block h-8 w-auto" src="/img/logo/workflow-logo-on-white.svg" alt="Workflow logo" />
                  <img className="block lg:hidden h-8 w-auto" src="/img/logo/workflow-mark-on-white.svg" alt="Workflow logo" />
                </a>
              </Link>
              {/* main menu items */}
              <div className="hidden sm:ml-6 sm:flex">
                <MainMenuLinks />
              </div>
            </div>

            <RightSideDesktop />


            {/* mobile menu button */}
            <div className="-mr-2 flex items-center sm:hidden">
              <button ref={mobileProfileMenuButtonNode} onClick={toggleDropdown} className="inline-flex items-center justify-center p-2 rounded-md text-common-lighter hover:text-common-light hover:bg-gray-100 transition duration-150 ease-in-out">
                <svg className={`${mobileMenuIsOpen ? 'hidden' : 'block'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className={`${mobileMenuIsOpen ? 'block' : 'hidden'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* mobile menu */}
        <div ref={mobileMenuNode} className={`${mobileMenuIsOpen ? 'block' : 'hidden'} sm:hidden`}>
          {/* main menu items */}
          <div className="pt-2 pb-3">
            <MainMenuLinks isMobile={true} />
          </div>

          {/* logged in */}
          {/* profile menu items */}
          <div className="pt-4 pb-3 border-t border-common">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-6 text-common-dark">Tom Cook</div>
                <div className="text-sm font-medium leading-5 text-common-light">tom@example.com</div>
              </div>
            </div>
            <div className="mt-3" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
              <ProfileMenuLinks isMobile={true} />
            </div>
          </div>

          {/* logged out */}
          {/* show Log In & Sign Up button */}

        </div>
      </nav>
      <style jsx>
        {`
          .headerBefore::before {
            content: "";
            display: block;
            height: 4px;
            width: 100%;
            background-image: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff);
          }
        `}
      </style>
    </>
  )
}

export default Header