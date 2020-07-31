import Layout from '../components/Layout'
import companyInfo from '../assets/company-info'
import ForgotPasswordChangePasswordForm from '../components/form/ForgotPasswordChangePasswordForm'

const ForgotPassword = () => {
  var title = `Forgot Password | ${companyInfo.name}`
  var description = 'Recover your password.'

  return (
    <Layout title={title} description={description}>
      <div className='max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8'>
        <h2>Recover Password</h2>
        <ForgotPasswordChangePasswordForm />
      </div>
    </Layout>
  )
}

export default ForgotPassword
