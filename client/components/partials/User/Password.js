import { useState } from 'react'
import ButtonFlat from '../../form/partials/ButtonFlat'
import Button from '../../form/partials/Button'




const Password = () => {
  const [altMenuActive, setAltMenuActive] = useState(false)

  const openAltMenu = () => {
    setAltMenuActive(true)
  }

  const closeAltMenu = () => {
    setAltMenuActive(false)
  }

  const InfoMenu = () => {
    return (
      <div className="bg-gray-50 grid grid-cols-6 gap-4 px-6 py-8">
        <div className='col-span-1 text-common text-sm'>
          Password
        </div>
        <div className='col-span-5 text-common'>
          Last updated May 17, 2017
        </div>
      </div>
    )
  }


  return (
    <div className="rounded overflow-hidden shadow-md">
      <div className="bg-white px-4 py-5 border-b border-gray-100">
        <div className="flex items-center justify-between flex-wrap sm:flex-no-wrap">
          <div>
            <h3 className="text-lg uppercase font-bold text-common-dark">
              Password
            </h3>
            <p className='text-common-light text-sm mt-1'>
              We recommend updating your password periodically to prevent unauthorized access.
            </p>
          </div>
          <div className={altMenuActive ? 'hidden' : ''}>
            <ButtonFlat onClick={openAltMenu}>
              <i className="fas fa-edit"></i>
              Update
            </ButtonFlat>
          </div>
        </div>
      </div>
      {altMenuActive ? '' : <InfoMenu />}
    </div>
  )
}

export default Password