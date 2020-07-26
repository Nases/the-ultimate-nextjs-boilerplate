import Button from '../../Button/Button'

const UpdateButton = (props) => {
  return (
    <div className={props.altMenuActive && 'hidden'}>
      <Button {...props} color='link'>
        <i className="fas fa-edit"></i>
        UPDATE
      </Button>
    </div>
  )
}

export default UpdateButton