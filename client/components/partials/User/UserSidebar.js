

const UserSidebar = () => {
  return (
    <div className="flex flex-col flex-grow border-r border-gray-200 bg-white overflow-y-auto rounded-md">
      <nav className="flex-1 bg-white">
        <a href="#" className="group flex items-center px-3 py-2 text-sm leading-5 font-medium text-indigo-600 bg-indigo-50 border-l-4 border-indigo-600 focus:outline-none focus:bg-indigo-100 transition ease-in-out duration-150">
          <svg className="mr-3 h-6 w-6 text-indigo-500 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
            Dashboard
          </a>
        <a href="#" className="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 border-l-4 border-transparent hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150">
          <svg className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-600 group-focus:text-gray-600 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          Team
        </a>
        <a href="#" className="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 border-l-4 border-transparent hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150">
          <svg className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-600 group-focus:text-gray-600 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
          Projects
        </a>
        <a href="#" className="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 border-l-4 border-transparent hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150">
          <svg className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-600 group-focus:text-gray-600 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Calendar
        </a>
        <a href="#" className="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 border-l-4 border-transparent hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150">
          <svg className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-600 group-focus:text-gray-600 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
          Documents
        </a>
        <a href="#" className="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 border-l-4 border-transparent hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150">
          <svg className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-600 group-focus:text-gray-600 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          Reports
        </a>
      </nav>
    </div>
  )
}

export default UserSidebar