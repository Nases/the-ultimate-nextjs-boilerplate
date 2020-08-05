import FormSuccessMessage from '../../form/partials/FormSuccessMessage'
import Card from '../../../components/Card/UserOptionsCard/Card'
import CardHeader from '../../../components/Card/UserOptionsCard/CardHeader'
import CardTitle from '../../../components/Card/UserOptionsCard/CardTitle'
import CardSubtitle from '../../../components/Card/UserOptionsCard/CardSubtitle'
import UpdateButton from '../../../components/Card/UserOptionsCard/UpdateButton'
import CardBody from '../../../components/Card/UserOptionsCard/CardBody'
import CardBodyKey from '../../../components/Card/UserOptionsCard/CardBodyKey'
import CardBodyValue from '../../../components/Card/UserOptionsCard/CardBodyValue'
import CardBodyRow from '../../../components/Card/UserOptionsCard/CardBodyRow'

import ChangeEmailForm from '../../form/ChangeEmailForm'
import { useUser, useDispatchUser } from '../../../contexts/UserProvider/UserProvider'


const ChangePersonalInformation = () => {
  const user = useUser()
  const userData = user.data
  const userName = (userData.firstName || '') + ' ' + (userData.lastName || '')

  const InfoMenu = () => {
    return (
      <CardBodyRow>
        <CardBodyKey>
          Name
        </CardBodyKey>
        <CardBodyValue>
          {userName}
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
                  Personal Information
                </CardTitle>
              </div>
              <UpdateButton onClick={openAltMenu} altMenuActive={altMenuActive} />
            </CardHeader>
            <CardBody>
              <FormSuccessMessage>{successMessage}</FormSuccessMessage>
              {altMenuActive ? <ChangeEmailForm closeAltMenu={closeAltMenu} showSuccessMessage={showSuccessMessage} /> : <InfoMenu />}
            </CardBody>
          </>
        )
      }}
    </Card>
  )
}

export default ChangePersonalInformation