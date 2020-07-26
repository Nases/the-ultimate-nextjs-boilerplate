const Button = (props) => {

  const colors = {
    primary: 'mt-6 text-white bg-primary hover:bg-primary-dark active:bg-primary-darker',
    secondary: 'mt-6 text-primary bg-white border border-primary hover:text-primary-dark hover:border-primary-dark active:text-primary-darker active:border-primary-darker',
    link: 'text-common-dark font-semibold hover:text-primary',
    gamifyPrimary: 'mt-6 text-white border border-b-4 border-primary-dark bg-primary hover:bg-primary-dark active:bg-primary-darker'
  }

  const defaultColor = colors['primary']

  return (
    <button
      {...props}
      className={`
        ${props.disabled && 'button-disabled opacity-50 cursor-default'}
        ${colors[props.color] || defaultColor}
        w-full flex justify-center py-2 px-4 h-10 text-sm font-medium rounded-md transition duration-150 ease-in-out
      `}
    >
      <span>
        {props.children}
      </span>
      <i aria-hidden className="fas fa-spinner fa-spin fa-lg hidden m-auto"></i>
    </button>
  )
}

export default Button