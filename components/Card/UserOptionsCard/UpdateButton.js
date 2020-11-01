import Button from '../../Button/Button'


const UpdateButton = (props) => {
  const { altMenuActive, ...rest } = props
  return (
    <div className={`${altMenuActive ? 'hidden' : ''} mt-2 md:mt-0 md:ml-4 min-w-max-content`}>
      <Button {...rest} color='link'>
        <i className="fas fa-edit"></i>
        {' '}
        UPDATE
      </Button>
    </div>
  )
}


export default UpdateButton