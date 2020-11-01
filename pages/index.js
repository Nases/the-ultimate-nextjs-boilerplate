import Layout from '../components/Layout/Layout'
import { companyInfo } from '../assets/config/settings'
import SimpleCenteredHero from '../components/HeroSections/SimpleCenteredHero/SimpleCenteredHero'
import CTAJustified from '../components/CTA/CTAJustified'
import Feature2x2 from '../components/Feature/Feature2x2'
import FAQAccordion from '../components/FAQ/FAQAccordion'


const Index = () => {
  var title = `The Ultimate Next.js Boilerplate | ${companyInfo.name}`
  var description = 'Production ready, one click deployable Next.js Boilerplate. Free and up for grabs to anyone!'

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