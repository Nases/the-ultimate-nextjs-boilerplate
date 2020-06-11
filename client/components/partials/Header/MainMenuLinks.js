import Link from 'next/link'
import { useRouter } from 'next/router'
import { mainMenuItems } from './menu-items'

const MainMenuLink = ({ children, href, isMobile = false }) => {
  const router = useRouter()
  if (isMobile) {
    return (
      <Link href={href}>
        <a className={`${router.pathname == href ? 'cursor-default border-primary text-primary' : 'mt-1 border-transparent text-common-light hover:text-common-dark hover:bg-gray-50 hover:border-common'} block pl-3 pr-4 py-2 border-l-4 font-primary font-semibold text-base transition duration-150 ease-in-out`}>
          {children}
        </a>
      </Link>
    )
  } else {
    return (
      <Link href={href}>
        <a className={`${router.pathname == href ? 'cursor-default border-primary text-common-dark' : 'border-transparent text-common-light hover:text-common hover:border-common'} ml-8 inline-flex items-center px-1 pt-1 border-b-2 font-primary font-semibold text-sm leading-5 transition duration-150 ease-in-out`}>
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