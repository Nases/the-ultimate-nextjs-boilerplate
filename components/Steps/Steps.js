const Steps = () => {
  return (
    <nav>
      <ul className="rounded-md divide-y divide-gray-300 md:flex md:divide-y-0">
        <li className="relative md:flex-1 md:flex">
          {/* <!-- Completed Step --> */}
          <a href="#" className="group flex items-center w-full">
            <div className="px-6 py-4 flex items-center text-sm leading-5 font-medium space-x-4">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-primary-600 rounded-full group-hover:bg-primary-800 transition ease-in-out duration-150">
                <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm leading-5 font-medium text-gray-900">Create resume</p>
            </div>
          </a>

          <div className="hidden md:block absolute top-0 right-0 h-full w-5">
            <svg className="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
              <path d="M0 -2L20 40L0 82" vectorEffect="non-scaling-stroke" stroke="currentcolor" strokeLinejoin="round" />
            </svg>
          </div>
        </li>

        <li className="relative md:flex-1 md:flex">
          {/* <!-- Current Step --> */}
          <div className="px-6 py-4 flex items-center text-sm leading-5 font-medium space-x-4">
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-primary-600 rounded-full">
              <p className="text-primary-600">2</p>
            </div>
            <p className="text-sm leading-5 font-medium text-primary-600">Choose plan</p>
          </div>

          <div className="hidden md:block absolute top-0 right-0 h-full w-5">
            <svg className="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
              <path d="M0 -2L20 40L0 82" vectorEffect="non-scaling-stroke" stroke="currentcolor" strokeLinejoin="round" />
            </svg>
          </div>
        </li>

        <li className="relative md:flex-1 md:flex">
          {/* <!-- Upcoming Step --> */}
          <a href="#" className="group flex items-center">
            <div className="px-6 py-4 flex items-center text-sm leading-5 font-medium space-x-4">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400 transition ease-in-out duration-150">
                <span className="text-gray-500 group-hover:text-gray-900 transition ease-in-out duration-150">3</span>
              </div>
              <p className="text-sm leading-5 font-medium text-gray-500 group-hover:text-gray-900 transition ease-in-out duration-150">Payment details</p>
            </div>
          </a>

          <div className="hidden md:block absolute top-0 right-0 h-full w-5">
            <svg className="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
              <path d="M0 -2L20 40L0 82" vectorEffect="non-scaling-stroke" stroke="currentcolor" strokeLinejoin="round" />
            </svg>
          </div>
        </li>

        <li className="relative md:flex-1 md:flex">
          {/* <!-- Upcoming Step --> */}
          <a href="#" className="group flex items-center">
            <div className="px-6 py-4 flex items-center text-sm leading-5 font-medium space-x-4">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400 transition ease-in-out duration-150">
                <span className="text-gray-500 group-hover:text-gray-900 transition ease-in-out duration-150">4</span>
              </div>
              <p className="text-sm leading-5 font-medium text-gray-500 group-hover:text-gray-900 transition ease-in-out duration-150">Download resume</p>
            </div>
          </a>
        </li>
      </ul>
    </nav>
  )
}


export default Steps