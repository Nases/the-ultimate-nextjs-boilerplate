import Button from '../../Button/Button'

const UpdateButton = (props) => {
  return (
    <Button {...props} color='link'>
      <i className="fas fa-edit"></i>
      UPDATE
    </Button>
  )
}

export default UpdateButton