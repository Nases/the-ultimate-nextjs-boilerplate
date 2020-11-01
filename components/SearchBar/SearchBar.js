const SearchBar = ({ placeholder, onChange, isLoading, setSearchLoading }) => {
  return (
    <div className="max-w-lg w-full lg:max-w-md">
      <label htmlFor="search" className="sr-only">{placeholder}</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </div>
        <input
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm transition duration-150 ease-in-out"
          onChange={e => {
            onChange(e.target.value)
            setSearchLoading(true)
          }}
          placeholder={placeholder}
          type="search"
        />
        {
          isLoading
            ? <div className="absolute inset-y-0 right-0 pr-9 flex items-center pointer-events-none">
              <i aria-hidden className="fas fa-spinner text-gray-400 animate-spin"></i>
            </div>
            : null
        }
      </div>
    </div>
  )
}


export default SearchBar