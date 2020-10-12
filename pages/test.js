import Layout from '../components/Layout/Layout'
import LayoutIndent from '../components/Layout/LayoutIndent'
import { companyInfo } from '../assets/settings'

import { gql, useQuery } from '@apollo/client'

const TestQuery = gql`
  query TestQuery {
    test
  }
`

const Template = () => {
  var title = `Default title | ${companyInfo.name}`
  var description = 'Default description.'

  const { data, loading, error } = useQuery(TestQuery)
  console.log(data)

  return (
    <Layout title={title} description={description}>
      <LayoutIndent>
        Hey
      </LayoutIndent>
    </Layout>
  )
}

export default Template
