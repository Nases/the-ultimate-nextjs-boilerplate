const FormErrorMessage = (props) => {
  return (
    <>
      {props.value ?
        <div {...props} className="block mt-1 mb-3 ml-1 text-sm font-medium leading-5 text-green-600 ">
          <i class="fas fa-check-circle"></i>{' '}
          {props.value}
        </div>
        : ''
      }
    </>
  )
}

export default FormErrorMessage