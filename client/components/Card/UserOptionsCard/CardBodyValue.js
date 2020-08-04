const CardBodyValue = (props) => {
  const { children, className, ...rest } = props
  return (
    <div className={`col-span-9 text-common ${className}`} {...rest}>
      {children}
    </div>
  )
}

export default CardBodyValue