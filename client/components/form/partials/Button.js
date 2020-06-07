const Button = (props) => {
  return (
    <div className="mt-6">
      <span className="block w-full rounded-md shadow-sm">
        <button {...props} className={`${props.disabled ? 'button-disabled opacity-50 cursor-default' : 'hover:bg-primary-dark'} w-full flex justify-center py-2 px-4 h-10 border border-transparent text-sm font-medium rounded-md text-white bg-primary transition duration-150 ease-in-out`}>
          <span>
            Sign up
          </span>
          <i class="fas fa-spinner fa-spin fa-lg hidden m-auto"></i>
        </button>
      </span>
    </div >
  )
}

export default Button