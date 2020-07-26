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

  const sayHello = () => {
    console.log('Hello')
  }


  return (
    <div className="rounded overflow-hidden shadow-md mb-7">
      {props.children(sayHello)}
    </div>
  )
}

export default Card