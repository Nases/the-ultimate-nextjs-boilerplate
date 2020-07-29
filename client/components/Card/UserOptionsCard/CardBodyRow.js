const CardBodyRow = (props) => {
  return (
    <div {...props} className={`md:grid md:grid-cols-6 md:gap-4 items-center ${props.mb && 'mb-3'}`}>
      {props.children}
    </div>
  )
}

export default CardBodyRow