import UserSidebar from './UserSidebar'

const UserLayout = ({ children }) => {
  return (
    <>
      <div className='grid grid-cols-4 gap-4'>
        <div className='col-span-1'>
          <UserSidebar />
        </div>
        <div className='col-span-3'>
          {children}
        </div>
      </div>
    </>
  )
}

export default UserLayout