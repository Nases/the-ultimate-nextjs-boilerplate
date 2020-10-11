import Layout from '../components/Layout/Layout'
import LayoutIndent from '../components/Layout/LayoutIndent'
import { companyInfo } from '../assets/settings'
import ForgotPasswordChangePasswordForm from '../components/form/ForgotPasswordChangePasswordForm'
import EnsureForgotPasswordChangePassword from '../components/utils/EnsureForgotPasswordChangePassword'


const ForgotPassword = () => {
  var title = `Forgot Password | ${companyInfo.name}`
  var description = 'Recover your password.'


  return (
    <EnsureForgotPasswordChangePassword>
      <Layout title={title} description={description}>
        <LayoutIndent>
          <ForgotPasswordChangePasswordForm />
        </LayoutIndent>
      </Layout>
    </EnsureForgotPasswordChangePassword>
  )
}

export default ForgotPassword
