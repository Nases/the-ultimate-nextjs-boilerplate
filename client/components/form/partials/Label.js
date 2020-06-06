const Label = ({ children, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="block mt-4 ml-1 text-sm font-medium leading-5 text-gray-700" >
      {children}
    </label >
  )
}

export default Label