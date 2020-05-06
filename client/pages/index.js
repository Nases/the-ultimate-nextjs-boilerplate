import Layout from '../components/Layout'
import companyInfo from '../assets/company-info'

export default () => {
  var title = `Default title | ${companyInfo.name}`
  var description = 'Default description'

  return (
    <Layout title={title} description={description}>
      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            {/* <!-- Replace with your content --> */}
            <div className="px-4 py-8 sm:px-0">
              <div className="border-4 border-dashed border-common rounded-lg h-96"></div>
            </div>
            {/* <!-- /End replace --> */}
          </div>
        </main>
      </div>
    </Layout>
  )
}