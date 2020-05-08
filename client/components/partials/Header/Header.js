import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Transition from "../../utils/Transition.js"
import MainMenuLink from './MainMenuLink'
import UserMenuLink from './UserMenuLink'
import { mainMenuItems, profileMenuItems } from './menu-items'
import { LoginButton, LoginModal } from './Login'
import { SignUpButton, SignUpModal } from './SignUp'

export default () => {

  // profile dropdown logic start
  const [desktopProfileMenuIsOpen, setDesktopProfileMenuIsOpen] = useState(false)
  const [mobileMenuIsOpen, setmobileMenuIsOpen] = useState(false)
  const desktopProfileMenuNode = useRef()
  const mobileMenuNode = useRef()
  const mobileProfileMenuButtonNode = useRef()

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
    setmobileMenuIsOpen(!mobileMenuIsOpen)
  }

  const handleProfileMenuClick = e => {
    if (!desktopProfileMenuNode.current.contains(e.target)) {
      // outside click 
      setDesktopProfileMenuIsOpen(false)
    }
    if (!mobileMenuNode.current.contains(e.target) && !mobileProfileMenuButtonNode.current.contains(e.target)) {
      // outside click 
      setmobileMenuIsOpen(false)
    }
  }
  const handleEscClick = e => {
    if (e.keyCode === 27) {
      setDesktopProfileMenuIsOpen(false)
      setmobileMenuIsOpen(false)
    }
  }
  // profile dropdown end



  function openModal() {
    dispatchAuthModal({ type: 'TOGGLE_LOGIN_MODAL' })
  }



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
                {
                  mainMenuItems.map(value => {
                    return (
                      <MainMenuLink key={value.href} href={value.href}>
                        {value.name}
                      </MainMenuLink>
                    )
                  })
                }
              </div>
            </div>

            {/* logged in */}
            {/* profile & notification dropdown */}
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              {/* notification dropdown */}
              <button className="p-1 border-2 border-transparent text-common-lighter rounded-full hover:text-common-light transition duration-150 ease-in-out" aria-label="Notifications">
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>

              {/* profile dropdown */}
              <div ref={desktopProfileMenuNode} className="ml-3 relative">
                <div>
                  <button onClick={toggleDropdown} className="flex text-sm border-2 border-transparent rounded-full transition duration-150 ease-in-out" id="user-menu" aria-label="User menu" aria-haspopup="true">
                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
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
                      {
                        profileMenuItems.map(value => {
                          return (
                            <UserMenuLink key={value.href} href={value.href}>
                              {value.name}
                            </UserMenuLink>
                          )
                        })
                      }
                    </div>
                  </div>
                </Transition>
              </div>
            </div>

            {/* logged out */}
            {/* show Log In & Sign Up button */}
            <div className='inline-flex items-center'>
              <span className="inline-flex">
                <LoginButton />
                <LoginModal />
              </span>
              <span className="inline-flex rounded-md shadow-sm items-center ml-2">
                {/* <button type="button" className="inline-flex items-center font-primary font-semibold uppercase h-10 px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition ease-in-out duration-150">
                  Sign Up
                </button> */}
                <SignUpButton />
                <SignUpModal />
              </span>
            </div>

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
            {
              mainMenuItems.map(value => {
                return (
                  <MainMenuLink key={value.href} href={value.href} isMobile={true}>
                    {value.name}
                  </MainMenuLink>
                )
              })
            }
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
              {
                profileMenuItems.map(value => {
                  return (
                    <UserMenuLink key={value.href} href={value.href} isMobile={true}>
                      {value.name}
                    </UserMenuLink>
                  )
                })
              }
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