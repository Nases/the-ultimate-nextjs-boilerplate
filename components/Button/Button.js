const Button = (props) => {
  const colors = {
    primary: 'text-white bg-primary-600 border border-primary-600 hover:bg-primary-700 hover:border-primary-700 active:bg-primary-800 active:border-primary-800',
    secondary: 'text-primary-600 bg-white border border-primary-600 hover:text-primary-700 hover:border-primary-700 active:text-primary-900 active:border-primary-900',
    link: 'text-gray-900 font-semibold hover:text-primary-600 pr-0 pl-0',
    gamifyPrimary: 'text-white border-b-4 border-primary-900 bg-primary-600 hover:bg-primary-700 hover:border-primary-900 active:border-b-0 active:border-t-4',
    gamifySecondary: 'text-primary-600 border border-b-4 border-primary-600 bg-white hover:text-primary-700 hover:border-primary-700 active:border active:border-t-4'
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
        ${disabled ? 'opacity-50 cursor-default' : ''}
        ${className || ''}
      `}
    >
      {
        !disabled
          ?
          <span>
            {props.children}
          </span>
          :
          <span>
            <i aria-hidden className="fas fa-spinner fa-spin fa-lg m-auto leading-5"></i>
          </span>
      }
    </button>
  )
}


export default Button