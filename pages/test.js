import Layout from '../components/Layout/Layout'
import LayoutIndent from '../components/Layout/LayoutIndent'
import { companyInfo } from '../assets/config/settings'
import FacebookLogin from 'react-facebook-login';


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
          // autoLoad={true}
          fields="name,email,picture"
          // onClick={componentClicked}
          callback={handleResponseFacebook}
        />


      </LayoutIndent>
    </Layout>
  )
}


export default Template
