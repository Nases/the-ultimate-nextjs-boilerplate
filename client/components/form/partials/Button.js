const Button = (props) => {
  return (
    <div className="mt-6">
      <span className="block w-full rounded-md">
        <button {...props} className={`${props.disabled ? 'button-disabled opacity-50 cursor-default' : props.secondary ? 'hover:text-primary-dark hover:border-primary-dark active:text-primary-darker active:border-primary-darker' : 'hover:bg-primary-dark active:bg-primary-darker'} ${props.secondary ? 'text-primary bg-white border-primary' : 'bg-primary text-white border-transparent'} w-full flex justify-center py-2 px-4 h-10 border text-sm font-medium rounded-md transition duration-150 ease-in-out`}>
          <span>
            {props.children}
          </span>
          <i aria-hidden className="fas fa-spinner fa-spin fa-lg hidden m-auto"></i>
        </button>
      </span>
    </div >
  )
}

export default Button