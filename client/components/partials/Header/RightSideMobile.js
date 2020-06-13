import { useEffect, useRef } from 'react'
import { useUser, useDispatchUser } from '../../../contexts/UserProvider/UserProvider'
import { useMobileMenu, useDispatchMobileMenu } from '../../../contexts/MobileMenuProvider/MobileMenuProvider'
import MainMenuLinks from './MainMenuLinks'
import ProfileMenuLinks from './ProfileMenuLinks'


const MobileMenuButton = () => {
  const mobileMenuState = useMobileMenu()
  const mobileMenuIsActive = mobileMenuState.isActive
  const dispatchMobileMenu = useDispatchMobileMenu()
  const mobileProfileMenuButtonNode = useRef()

  const openDropdown = () => {
    dispatchMobileMenu({ type: 'OPEN' })
  }

  const closeDropdown = () => {
    dispatchMobileMenu({ type: 'CLOSE' })
  }

  return (
    <div className='inline-flex sm:hidden items-center justify-center '>
      <button ref={mobileProfileMenuButtonNode} className="inline-flex items-center justify-center p-2 rounded-md text-common-lighter transition duration-150 ease-in-out">
        <svg onClick={openDropdown} className={`${mobileMenuIsActive ? 'hidden' : 'block'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg onClick={closeDropdown} className={`${mobileMenuIsActive ? 'block' : 'hidden'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}

const RightSideMobile = () => {
  const userData = useUser()
  const mobileMenuState = useMobileMenu()
  const mobileMenuIsActive = mobileMenuState.isActive
  const dispatchMobileMenu = useDispatchMobileMenu()
  const mobileMenuNode = useRef()

  useEffect(() => {
    document.addEventListener("mousedown", handleProfileMenuClick)
    document.addEventListener("keydown", handleEscClick)

    return () => {
      document.removeEventListener("mousedown", handleProfileMenuClick)
      document.removeEventListener("keydown", handleEscClick)
    }
  }, [])

  const handleProfileMenuClick = e => {
    if (!mobileMenuNode.current.contains(e.target)) {
      // outside click 
      dispatchMobileMenu({ type: 'CLOSE' })
    }
  }

  const handleEscClick = e => {
    if (e.keyCode === 27) {
      dispatchMobileMenu({ type: 'CLOSE' })
    }
  }


  return (
    <div ref={mobileMenuNode} className={`${mobileMenuIsActive ? 'block' : 'hidden'} sm:hidden`}>
      <div className="pt-2 pb-3">
        <MainMenuLinks isMobile={true} />
      </div>

      {/* logged in */}
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
  )
}

export { MobileMenuButton }
export default RightSideMobile