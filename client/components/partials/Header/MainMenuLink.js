import Link from 'next/link'
import { useRouter } from 'next/router'

export default ({ children, href, isMobile = false }) => {
  const router = useRouter()
  if (isMobile) {
    return (
      <Link href={href}>
        <a className={`${router.pathname == href ? 'cursor-default border-primary text-primary' : 'mt-1 border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium focus:outline-none transition duration-150 ease-in-out`}>
          {children}
        </a>
      </Link>
    )
  } else {
    return (
      <Link href={href}>
        <a className={`${router.pathname == href ? 'cursor-default border-primary text-gray-900' : 'ml-8 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out`}>
          {children}
        </a>
      </Link>
    )
  }
}