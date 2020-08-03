import Button from '../../Button/Button'

const UpdateButton = (props) => {
  const { altMenuActive, ...rest } = props
  return (
    <div className={altMenuActive ? 'hidden' : ''} >
      <Button {...rest} color='link'>
        <i className="fas fa-edit"></i>
        UPDATE
      </Button>
    </div>
  )
}

export default UpdateButton