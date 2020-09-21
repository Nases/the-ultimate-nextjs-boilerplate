const FormSuccessMessage = (props) => {

  return (
    <>
      {props.children ?
        <div {...props} className="block mb-3 text-sm font-medium text-green-600 ">
          <i className="fas fa-check-circle"></i>{' '}
          {props.children}
        </div>
        : ''
      }
    </>
  )
}

export default FormSuccessMessage