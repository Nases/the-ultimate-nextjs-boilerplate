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

import ChangePasswordForm from '../../form/ChangePasswordForm'
import { useUser, useDispatchUser } from '../../../contexts/UserProvider/UserProvider'


const Template = () => {

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
      {({ altMenuActive, successMessage, openAltMenu, closeAltMenu, showSuccessMessage }) => {
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
              <UpdateButton onClick={openAltMenu} altMenuActive={altMenuActive} />
            </CardHeader>
            <CardBody>
              <FormSuccessMessage value={successMessage} />
              {altMenuActive ? <ChangePasswordForm closeAltMenu={closeAltMenu} showSuccessMessage={showSuccessMessage} /> : <InfoMenu />}
            </CardBody>
          </>
        )
      }}
    </Card>
  )
}

export default Template