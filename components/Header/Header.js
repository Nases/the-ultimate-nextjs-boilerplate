import Link from 'next/link'
import MainMenuLinks from './MainMenuLinks'
import RightSideDesktop from './RightSideDesktop'
import RightSideMobile, { MobileMenuButton } from './RightSideMobile'


const Header = () => {
  return (
    <>
      <div className='headerBefore'></div>
      <nav className="header bg-white z-40 shadow-sm sm:sticky top-0">
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

            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <RightSideDesktop />
            </div>

            {/* mobile menu button */}
            <MobileMenuButton />
          </div>
        </div>
        {/* mobile menu */}
        <RightSideMobile />
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