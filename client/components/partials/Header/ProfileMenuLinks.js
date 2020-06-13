import Link from 'next/link'
import { useRouter } from 'next/router'
import { profileMenuItems } from './menu-items'

const UserMenuLink = ({ children, href, onClick, isMobile = false }) => {
  const router = useRouter()


  if (isMobile) {
    return (
      <Link href={href}>
        <a className={`${router.pathname == href ? 'cursor-default border-primary text-primary' : 'mt-1 border-transparent hover:border-gray-300  text-gray-500 hover:text-gray-800 hover:bg-gray-100'} block border-l-4 px-4 py-2 font-primary font-semibold text-base transition duration-150 ease-in-out`}>
          {children}
        </a>
      </Link>
    )
  } else {
    return (
      <Link href={href}>
        <a className={`${router.pathname == href ? 'text-primary' : 'hover:border-gray-300 text-gray-700 hover:bg-gray-100'} block px-4 py-2 font-primary font-semibold text-sm leading-5 transition duration-150 ease-in-out`}>
          {children}
        </a>
      </Link>
    )
  }
}


const ProfileMenuLinks = ({ isMobile }) => {
  return (
    profileMenuItems.map(value => {
      return (
        <UserMenuLink key={value.href} href={value.href} isMobile={isMobile}>
          {value.name}
        </UserMenuLink>
      )
    })
  )
}

export default ProfileMenuLinks