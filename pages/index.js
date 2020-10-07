import Layout from '../components/Layout/Layout'
import companyInfo from '../assets/company-info'
import FloatBottomBanner from '../components/banners/FloatBottomBanner'
import SimpleCenteredHero from '../components/HeroSections/SimpleCenteredHero/SimpleCenteredHero'
import CTAJustified from '../components/CTA/CTAJustified'
import Feature2x2 from '../components/Feature/Feature2x2'
import FAQAccordion from '../components/FAQ/FAQAccordion'

const Index = () => {
  var title = `Default title | ${companyInfo.name}`
  var description = 'Default description'

  return (
    <Layout title={title} description={description}>
      <SimpleCenteredHero />
      <Feature2x2 />
      <FAQAccordion />
      <CTAJustified />
    </Layout>
  )
}

export default Index