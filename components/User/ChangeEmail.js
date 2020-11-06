import FormSuccessMessage from '../Form/partials/FormSuccessMessage'
import Card from '../../components/Card/UserOptionsCard/Card'
import CardHeader from '../../components/Card/UserOptionsCard/CardHeader'
import CardTitle from '../../components/Card/UserOptionsCard/CardTitle'
import UpdateButton from '../../components/Card/UserOptionsCard/UpdateButton'
import CardBody from '../../components/Card/UserOptionsCard/CardBody'
import CardBodyKey from '../../components/Card/UserOptionsCard/CardBodyKey'
import CardBodyValue from '../../components/Card/UserOptionsCard/CardBodyValue'
import CardBodyRow from '../../components/Card/UserOptionsCard/CardBodyRow'
import ChangeEmailForm from '../Form/ChangeEmailForm'
import { useUser } from '../../assets/contexts/UserProvider/UserProvider'


const ChangeEmail = () => {
  const user = useUser()
  const userData = user.data
  const userEmail = userData.email

  const InfoMenu = () => {
    return (
      <CardBodyRow>
        <CardBodyKey>
          Email
        </CardBodyKey>
        <CardBodyValue>
          {userEmail}
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
                  Email
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

export default ChangeEmail