import Button from '../../Button/Button'

const UpdateButton = (props) => {
  const { altMenuActive, ...rest } = props
  return (
    altMenuActive ?
      <Button {...rest} color='link'>
        <i className="fas fa-edit"></i>
        UPDATE
      </Button>
      : ''

  )
}

export default UpdateButton