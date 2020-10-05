import Layout from '../components/Layout/Layout'
import LayoutIndent from '../components/Layout/LayoutIndent'
import companyInfo from '../assets/company-info'
import FloatBottomBanner from '../components/banners/FloatBottomBanner'
import SimpleCenteredHero from '../components/HeroSections/SimpleCenteredHero/SimpleCenteredHero'
import CTAJustified from '../components/CTA/CTAJustified'
import Feature2x2 from '../components/Feature/Feature2x2'
import FAQCenteredAccordion from '../components/FAQ/FAQCenteredAccordion'

const Index = () => {
  var title = `Default title | ${companyInfo.name}`
  var description = 'Default description'

  return (
    <Layout title={title} description={description}>
      <SimpleCenteredHero />
      <Feature2x2 />
      <FAQCenteredAccordion />
      {/* <LayoutIndent>
      </LayoutIndent> */}
      <CTAJustified />
    </Layout>
  )
}

export default Index