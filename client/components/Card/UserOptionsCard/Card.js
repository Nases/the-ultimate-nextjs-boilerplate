import { useState } from 'react'

const Card = (props) => {
  const [altMenuActive, setAltMenuActive] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)

  const openAltMenu = () => {
    setAltMenuActive(true)
  }

  const closeAltMenu = () => {
    setAltMenuActive(false)
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