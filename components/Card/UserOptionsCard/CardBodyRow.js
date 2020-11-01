const CardBodyRow = (props) => {
  const { mb, children, ...rest } = props
  return (
    <div {...rest} className={`md:grid md:grid-cols-12 md:gap-4 ${mb && 'mb-3'}`}>
      {children}
    </div>
  )
}


export default CardBodyRow