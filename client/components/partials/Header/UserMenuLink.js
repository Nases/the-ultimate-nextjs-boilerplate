import Link from 'next/link'
import { useRouter } from 'next/router'

export default ({ children, href, isMobile = false }) => {
  const router = useRouter()
  if (isMobile) {
    return (
      <Link href={href}>
        <a className={`${router.pathname == href ? 'cursor-default border-primary text-primary' : 'mt-1 border-transparent hover:border-gray-300  text-gray-500 hover:text-gray-800 hover:bg-gray-100'} block border-l-4 px-4 py-2 text-base font-medium transition duration-150 ease-in-out`}>
          {children}
        </a>
      </Link>
    )
  } else {
    return (
      <Link href={href}>
        <a className={`${router.pathname == href ? 'cursor-default border-primary text-primary' : 'border-transparent hover:border-gray-300 text-gray-700 hover:bg-gray-100'} block border-l-4 px-4 py-2 text-sm leading-5 transition duration-150 ease-in-out`}>
          {children}
        </a>
      </Link>
    )
  }
}