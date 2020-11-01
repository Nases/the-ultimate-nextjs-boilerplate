import UserSidebar from './UserSidebar'


const UserLayout = ({ children }) => {
  return (
    <>
      <div className='md:grid md:grid-cols-4 md:gap-4'>
        <div className='hidden md:block md:col-span-1'>
          <UserSidebar />
        </div>
        <div className='md:col-span-3'>
          {children}
        </div>
      </div>
    </>
  )
}


export default UserLayout