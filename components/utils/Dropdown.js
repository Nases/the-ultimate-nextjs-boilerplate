import { useState, useEffect, useRef } from 'react'


const Dropdown = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const node = useRef()
  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick)
    document.addEventListener("keydown", escFunction)
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick)
      document.removeEventListener("keydown", escFunction)
    }
  }, [])
  const handleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return
    }
    // outside click 
    setIsOpen(false)
  }
  const escFunction = e => {
    if (e.keyCode === 27) {
      setIsOpen(false)
    }
  }

  return (
    <div ref={node}>
      {children}
    </div>
  )
}


export default Dropdown