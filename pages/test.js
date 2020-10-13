import Layout from '../components/Layout/Layout'
import LayoutIndent from '../components/Layout/LayoutIndent'
import { companyInfo } from '../assets/settings'

import { gql, useQuery } from '@apollo/client'
import { UserQuery } from '../assets/graphql/queries'

const Template = () => {
  var title = `Default title | ${companyInfo.name}`
  var description = 'Default description.'


  const { data, loading, error } = useQuery(UserQuery)
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
