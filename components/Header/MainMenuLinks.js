import Link from 'next/link'
import { useRouter } from 'next/router'
import { mainMenuItems } from '../../assets/config/menu-items'


const MainMenuLink = ({ children, href, isMobile = false }) => {
  const router = useRouter()
  if (isMobile) {
    return (
      <Link href={href}>
        <a className={`${router.pathname == href ? 'cursor-default border-primary-600 text-primary-600' : 'mt-1 border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50 hover:border-gray-200'} block pl-3 pr-4 py-2 border-l-4 font-primary font-semibold text-base transition duration-150 ease-in-out`}>
          {children}
        </a>
      </Link>
    )
  } else {
    return (
      <Link href={href}>
        <a className={`${router.pathname == href ? 'cursor-default border-primary-600 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200'} ml-8 -my-1px inline-flex items-center px-1 pt-1 border-b-2 font-primary font-semibold text-sm leading-5 transition duration-150 ease-in-out`}>
          {children}
        </a>
      </Link>
    )
  }
}

const MainMenuLinks = ({ isMobile }) => {
  return (
    mainMenuItems.map(value => {
      return (
        <MainMenuLink key={value.href} href={value.href} isMobile={isMobile}>
          {value.name}
        </MainMenuLink>
      )
    })
  )
}


export default MainMenuLinks