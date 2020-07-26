const Card = (props) => {
  return (
    <div className="rounded overflow-hidden shadow-md mb-7">
      {props.children}
    </div>
  )
}

export default Card