import Layout from '../components/Layout/Layout'
import LayoutIndent from '../components/Layout/LayoutIndent'
import { companyInfo } from '../assets/config/settings'
import PricingSimpleTiers from '../components/Pricing/PricingSimpleTiers/PricingSimpleTiers'
import References from '../components/References/References'
import Steps from '../components/Steps/Steps'

const Pricing = () => {
  var title = `Default title | ${companyInfo.name}`
  var description = 'Default description.'

  return (
    <Layout title={title} description={description}>
      <Steps />
      <PricingSimpleTiers />
      <References />
    </Layout>
  )
}

export default Pricing
