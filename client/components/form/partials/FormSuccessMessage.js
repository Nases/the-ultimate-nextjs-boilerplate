const FormSuccessMessage = (props) => {
  return (
    <>
      {props.children ?
        <div {...props} className="block mb-3 text-sm font-medium leading-5 text-green-600 ">
          <i class="fas fa-check-circle"></i>{' '}
          {props.children}
        </div>
        : ''
      }
    </>
  )
}

export default FormSuccessMessage