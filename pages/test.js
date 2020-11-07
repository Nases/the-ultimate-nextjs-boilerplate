import { useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import LayoutIndent from '../components/Layout/LayoutIndent'
import { companyInfo } from '../assets/config/settings'
import GoogleLogin from 'react-google-login'


const Template = () => {
  var title = `Default title | ${companyInfo.name}`
  var description = 'Default description.'

  const responseGoogle = (response) => {
    console.log(response);
  }


  return (
    <Layout title={title} description={description}>
      <LayoutIndent>

        <GoogleLogin
          clientId="744169106775-iqnb86cjb0e1bbbvcfm35j1qghkjo50i.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />

      </LayoutIndent>
    </Layout>
  )
}


export default Template
