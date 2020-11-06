const ButtonFlat = (props) => {
  return (
    <button {...props} className="w-full flex items-center font-semibold uppercase hover:text-primary-500 h-10 px-3 py-2 text-sm leading-4 text-gray-900 transition ease-in-out duration-150">
      {props.children}
    </button >
  )
}


export default ButtonFlat