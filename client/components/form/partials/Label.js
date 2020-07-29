const Label = ({ children, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium leading-5 text-gray-700" >
      {children}
    </label >
  )
}

export default Label