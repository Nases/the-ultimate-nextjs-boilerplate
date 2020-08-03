import { profileMenuItems } from '../../../assets/menu-items'
import { useRouter } from 'next/router'
import Link from 'next/link'

const UserSideBarItem = ({ children, href, icon }) => {
  const router = useRouter()

  return (
    <Link href={href}>
      <a className={`${router.pathname == href ? 'border-primary-dark bg-orange-50 text-primary-dark' : 'border-transparent text-common hover:text-common-dark hover:bg-gray-100'} flex items-center px-3 py-2 text-sm leading-5 font-medium border-l-4`}>
        <div className="flex justify-center items-center mr-3 h-6 w-6">
          <i className={`fas fa-${icon} fa-lg`}></i>
        </div>
        <div>{children}</div>
      </a>
    </Link>
  )
}

const UserSidebar = () => {
  return (
    <div className="flex flex-col flex-grow shadow-md bg-white overflow-y-auto rounded-md">
      <nav className="bg-white">
        {profileMenuItems.map(value => {
          if (value.name !== 'Log Out') {
            return (
              <UserSideBarItem href={value.href} icon={value.icon} key={value.name}>
                {value.name}
              </UserSideBarItem>
            )
          }
        })}
      </nav>
    </div>
  )
}

export default UserSidebar