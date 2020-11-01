import { useState } from 'react'


const Card = (props) => {
  const [altMenuActive, setAltMenuActive] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)

  const openAltMenu = () => {
    setAltMenuActive(true)
    document.addEventListener('keydown', handleEscClick)
  }

  const closeAltMenu = () => {
    setAltMenuActive(false)
    document.removeEventListener('keydown', handleEscClick)
  }

  const handleEscClick = e => {
    if (e.keyCode === 27) {
      closeAltMenu()
    }
  }

  const showSuccessMessage = message => {
    setSuccessMessage(message)
    setTimeout(() => {
      setSuccessMessage(false)
    }, 5000);
  }

  return (
    <div className="rounded overflow-hidden shadow-md mb-7">
      {props.children({ altMenuActive, successMessage, openAltMenu, closeAltMenu, showSuccessMessage })}
    </div>
  )
}


export default Card