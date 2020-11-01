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


// import Card from '../../../components/Card/UserOptionsCard/Card'
// import CardHeader from '../../../components/Card/UserOptionsCard/CardHeader'
// import CardTitle from '../../../components/Card/UserOptionsCard/CardTitle'
// import CardSubtitle from '../../../components/Card/UserOptionsCard/CardSubtitle'
// import UpdateButton from '../../../components/Card/UserOptionsCard/UpdateButton'
// import CardBody from '../../../components/Card/UserOptionsCard/CardBody'
// import CardBodyKey from '../../../components/Card/UserOptionsCard/CardBodyKey'
// import CardBodyValue from '../../../components/Card/UserOptionsCard/CardBodyValue'
// import CardBodyRow from '../../../components/Card/UserOptionsCard/CardBodyRow'
// const moment = require('moment')

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
              <FormSuccessMessage>{successMessage}</FormSuccessMessage>
              {altMenuActive ? <ChangePasswordForm closeAltMenu={closeAltMenu} showSuccessMessage={showSuccessMessage} /> : <InfoMenu />}
            </CardBody>
          </>
        )
      }}
    </Card>
  )
}


export default Template