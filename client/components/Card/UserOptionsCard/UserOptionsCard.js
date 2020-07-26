import { useState } from 'react'
import Button from '../../Button/Button'
import ChangePasswordForm from '../../form/ChangePasswordForm'
import { useUser, useDispatchUser } from '../../../contexts/UserProvider/UserProvider'
import FormSuccessMessage from '../../form/partials/FormSuccessMessage'
import Card from './Card'
import CardHeader from './CardHeader'
import CardTitle from './CardTitle'
import CardSubtitle from './CardSubtitle'
import UpdateButton from './UpdateButton'
import CardBody from './CardBody'
import CardBodyKey from './CardBodyKey'
import CardBodyValue from './CardBodyValue'
import CardBodyRow from './CardBodyRow'

const moment = require('moment')


const UserOptionsCard = () => {
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

  const InfoMenu = () => {
    return (
      <CardBodyRow>
        <CardBodyKey>
          Password
        </CardBodyKey>
        <CardBodyValue>
          Last updated {' '}
          Some value here
        </CardBodyValue>
      </CardBodyRow>
    )
  }

  return (
    <Card>
      {(sayHe) => {
        return (
          <>
            <CardHeader>
              <div>
                <CardTitle>
                  Password
              </CardTitle>
                <CardSubtitle>
                  We recommend updating your password periodically to prevent unauthorized access.
              </CardSubtitle>
              </div>
              <div className={altMenuActive && 'hidden'}>
                <UpdateButton onClick={openAltMenu} />
              </div>
            </CardHeader>
            <CardBody>
              {successMessage && <FormSuccessMessage value={successMessage} />}
              {altMenuActive ? <ChangePasswordForm closeAltMenu={closeAltMenu} showSuccessMessage={showSuccessMessage} /> : <InfoMenu />}
            </CardBody>
          </>
        )
      }}
    </Card>
  )
}

export default UserOptionsCard