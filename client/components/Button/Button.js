const Button = (props) => {

  const colors = {
    primary: 'text-white bg-primary hover:bg-primary-dark active:bg-primary-darker',
    secondary: 'text-primary bg-white border border-primary hover:text-primary-dark hover:border-primary-dark active:text-primary-darker active:border-primary-darker',
    link: 'text-common-dark font-semibold hover:text-primary pr-0 pl-0',
    gamifyPrimary: 'text-white border-b-4 border-primary-dark bg-primary hover:bg-primary-dark hover:border-orange-800 active:border-b-0 active:border-t-4',
    gamifySecondary: 'text-primary border border-b-4 border-primary-dark bg-white hover:text-primary-dark hover:border-orange-800 active:border active:border-t-4'
  }

  const sizes = {
    sm: 'py-2 px-3 text-sm',
    md: 'py-2 px-4 text-sm',
    lg: 'py-3 px-6 text-lg',
    xl: 'py-4 px-8 text-xl'
  }

  const defaultColor = colors['primary']
  const defaultSize = sizes['md']

  const { className, disabled, color, size, children, type, ...rest } = props

  return (
    <button
      {...rest}
      type={type || 'button'}
      className={`
        inline-flex justify-center font-medium rounded-md transition duration-150 ease-in-out
        ${sizes[size] || defaultSize}
        ${colors[color] || defaultColor}
        ${disabled ? 'button-disabled opacity-50 cursor-default' : ''}
        ${className || ''}
      `}
    >
      <span>
        {props.children}
      </span>

      <i aria-hidden className="fas fa-spinner fa-spin fa-lg hidden m-auto leading-5"></i>
    </button>
  )
}

export default Button