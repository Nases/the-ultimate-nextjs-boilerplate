import FormSuccessMessage from '../Form/partials/FormSuccessMessage'
import Card from '../../components/Card/UserOptionsCard/Card'
import CardHeader from '../../components/Card/UserOptionsCard/CardHeader'
import CardTitle from '../../components/Card/UserOptionsCard/CardTitle'
import UpdateButton from '../../components/Card/UserOptionsCard/UpdateButton'
import CardBody from '../../components/Card/UserOptionsCard/CardBody'
import CardBodyKey from '../../components/Card/UserOptionsCard/CardBodyKey'
import CardBodyValue from '../../components/Card/UserOptionsCard/CardBodyValue'
import CardBodyRow from '../../components/Card/UserOptionsCard/CardBodyRow'
import ChangePersonalInformationForm from '../Form/ChangePersonalInformationForm'
import { useUser } from '../../assets/contexts/UserProvider/UserProvider'


const ChangePersonalInformation = () => {
  const user = useUser()
  const userData = user.data
  const firstName = userData.firstName
  const lastName = userData.lastName

  var userName
  if (!firstName && !lastName) {
    userName = 'Update your information'
  } else {
    userName = (userData.firstName || '') + ' ' + (userData.lastName || '')
  }

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
              {altMenuActive ? <ChangePersonalInformationForm closeAltMenu={closeAltMenu} showSuccessMessage={showSuccessMessage} /> : <InfoMenu />}
            </CardBody>
          </>
        )
      }}
    </Card>
  )
}


export default ChangePersonalInformation