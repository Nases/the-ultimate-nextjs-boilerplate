const CardTitle = (props) => {
  const { children, className, ...rest } = props
  return (
    <h3 {...rest} className={`text-xl uppercase font-bold text-gray-900 my-1 ${className ? className : ''}`}>
      {children}
    </h3>
  )
}


export default CardTitle