import FormSuccessMessage from '../Form/partials/FormSuccessMessage'
import Card from '../../components/Card/UserOptionsCard/Card'
import CardHeader from '../../components/Card/UserOptionsCard/CardHeader'
import CardTitle from '../../components/Card/UserOptionsCard/CardTitle'
import CardSubtitle from '../../components/Card/UserOptionsCard/CardSubtitle'
import UpdateButton from '../../components/Card/UserOptionsCard/UpdateButton'
import CardBody from '../../components/Card/UserOptionsCard/CardBody'
import CardBodyKey from '../../components/Card/UserOptionsCard/CardBodyKey'
import CardBodyValue from '../../components/Card/UserOptionsCard/CardBodyValue'
import CardBodyRow from '../../components/Card/UserOptionsCard/CardBodyRow'
import ChangePasswordForm from '../Form/ChangePasswordForm'
import { useUser } from '../../assets/contexts/UserProvider/UserProvider'
import moment from 'moment'


const ChangePassword = () => {
  const user = useUser()
  const userData = user.data
  const userPasswordLastUpdated = moment(userData.passwordLastUpdated).format('MMM DD, YYYY')

  const InfoMenu = () => {
    return (
      <CardBodyRow>
        <CardBodyKey>
          Password
        </CardBodyKey>
        <CardBodyValue>
          Last updated {' '}
          {userPasswordLastUpdated}
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


export default ChangePassword