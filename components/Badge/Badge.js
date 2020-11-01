const Badge = (props) => {
  const colors = {
    default: 'bg-gray-100 text-gray-800',
    red: 'bg-red-100 text-red-800',
    orange: 'bg-orange-100 text-orange-800',
    yellow: 'bg-yellow-100 text-yellow-800',
    green: 'bg-green-100 text-green-800',
    teal: 'bg-teal-100 text-teal-800',
    blue: 'bg-blue-100 text-blue-800',
    indigo: 'bg-indigo-100 text-indigo-800',
    purple: 'bg-purple-100 text-purple-800',
    pink: 'bg-pink-100 text-pink-800'
  }

  const sizes = {
    small: 'px-2.5 py-0.5 text-xs leading-4',
    large: 'px-3 py-0.5 text-sm leading-5'
  }

  const { className, color, size, children, ...rest } = props


  return (
    <>
      <span {...rest} className={`inline-flex items-center rounded-full font-medium ${sizes[size || 'small']} ${colors[color || 'default']} ${className || ''}`}>
        {children}
      </span>
    </>
  )
}

export default Badge