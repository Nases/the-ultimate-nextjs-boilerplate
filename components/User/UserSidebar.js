import { profileMenuItems } from '../../assets/config/menu-items'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useUser } from '../../assets/contexts/UserProvider/UserProvider'


const UserSideBarItem = ({ children, href, icon }) => {
  const router = useRouter()

  return (
    <Link href={href}>
      <a className={`${(router.pathname == href || (children == 'Users' && router.pathname == '/admin/user/[id]')) ? 'border-primary-600 bg-primary-50 text-primary-600' : 'border-transparent text-gray-700 hover:text-gray-900 hover:bg-gray-100'} flex items-center px-3 py-2 text-sm leading-5 font-medium border-l-2`}>
        <div className="flex justify-center items-center mr-3 h-6 w-6">
          <i className={`fas fa-${icon} fa-lg`}></i>
        </div>
        <div>{children}</div>
        {(children == 'Users' && router.pathname == '/admin/user/[id]') ? <div className='ml-auto text-primary-600'><i className="fas fa-ellipsis-h"></i></div> : ''}
      </a>
    </Link>
  )
}

const UserSidebar = () => {
  const userData = useUser()
  const role = userData.data.role

  return (
    <div className="flex flex-col flex-grow shadow-md bg-white overflow-y-auto rounded-md mb-6">
      <nav className="bg-white">
        {profileMenuItems.map(value => {
          if ((value.name !== 'Log Out') && (value.roleRequired.includes(role))) {
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