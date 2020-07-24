const Input = (props) => {
  return (
    <div className="mt-1 rounded-md shadow-sm">
      <input {...props} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:border-gray-400 focus:outline-none transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
    </div>
  )
}

export default Input
