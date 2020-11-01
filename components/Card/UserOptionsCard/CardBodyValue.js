const CardBodyValue = (props) => {
  const { children, className, ...rest } = props
  return (
    <div className={`col-span-10 text-gray-700 ${className}`} {...rest}>
      {children}
    </div>
  )
}


export default CardBodyValue