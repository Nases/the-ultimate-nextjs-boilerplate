import Layout from '../components/Layout/Layout'
import LayoutIndent from '../components/Layout/LayoutIndent'
import { companyInfo } from '../assets/config/settings'
// import FacebookLogin from 'react-facebook-login'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'


const Template = () => {
  var title = `Default title | ${companyInfo.name}`
  var description = 'Default description.'

  const handleResponseFacebook = response => {
    console.log(response)
  }

  return (
    <Layout title={title} description={description}>
      <LayoutIndent>


        <FacebookLogin
          appId="632779907666090"
          fields="name,email,picture"
          callback={handleResponseFacebook}
          render={renderProps => (
            <span onClick={renderProps.onClick} className="inline-flex rounded-full shadow-sm">
              <button type="button" className="inline-flex items-center px-3 py-2 border border-transparent text-md leading-5 font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none active:bg-blue-700 transition ease-in-out duration-150">
                <i aria-hidden className="fab fa-facebook fa-lg"></i>
                &nbsp;
                Continue with Facebook
              </button>
            </span>
          )
          }
        />

      </LayoutIndent>
    </Layout>
  )
}


export default Template
