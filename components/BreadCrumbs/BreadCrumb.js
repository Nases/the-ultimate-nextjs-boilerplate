import Link from 'next/link'


const BreadCrumb = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className="text-gray-500 hover:text-gray-700 focus:outline-none focus:underline transition duration-150 ease-in-out">
        {children}
      </a>
    </Link>
  )
}


export default BreadCrumb