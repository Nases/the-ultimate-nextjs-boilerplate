const Label = ({ children, htmlFor, variant }) => {

  const variants = {
    top: 'ml-1 mt-3',
    left: 'mt-3'
  }

  const defaultVariant = variants['top']

  return (
    <label htmlFor={htmlFor} className={`block text-sm font-medium leading-5 text-gray-700 ${variant ? variants[variant] : defaultVariant}`} >
      {children}
    </label>
  )
}

export default Label