import Layout from '../components/Layout/Layout'
import LayoutIndent from '../components/Layout/LayoutIndent'
import { companyInfo } from '../assets/settings'

import { gql, useQuery, useMutation } from '@apollo/client'

import Iron from '@hapi/iron'



const Template = () => {
  var title = `Default title | ${companyInfo.name}`
  var description = 'Default description.'

  const UserQuery = gql`
    query UserQuery($id: String!) {
      user(id: $id) {
        _id
        email
        password
        roleId
        firstName
        lastName
        address
        forgotPasswordToken
        registrationDate
        passwordLastUpdated
      }
    }
  `

  const UsersQuery = gql`
    query UsersQuery {
      users {
        _id
        email
        password
        roleId
        firstName
        lastName
        address
        forgotPasswordToken
        registrationDate
        passwordLastUpdated
      }
    }
  `


  // const { data, loading, error } = useQuery(UserQuery, { variables: { id: '5f6fc45ed8971024e0cf18f4' } })
  // const { data, loading, error } = useQuery(UsersQuery)
  // console.log(`data: ${data}`)
  // console.log(`loading: ${loading}`)
  // console.log(`error: ${error?.message}`)





  async function sealObject() {
    // console.log(Iron)

    // const testObject = {
    //   hello: 'this is hello',
    //   hello2: 'this is hello2',
    //   hello3: 'this is hello3'
    // }
    // const secret = 'this is a secret key with at least 32 chars long'

    // const sealed = await Iron.seal(testObject, secret, Iron.defaults)
    // console.log(sealed)
    // const unsealed = await Iron.unseal(sealed, secret, Iron.defaults)
    // console.log(unsealed)




    const obj = {
      a: 1,
      b: 2,
      c: [3, 4, 5],
      d: {
        e: 'f'
      }
    };


    const password = 'some_not_random_password_that_is_at_least_32_characters';

    let sealed
    try {
      sealed = await Iron.seal(obj, password, Iron.defaults);
    } catch (err) {
      console.log(err.message);
    }
    console.log('sealed: ' + sealed)


    let unsealed
    try {
      unsealed = await Iron.unseal(sealed, password, Iron.defaults);
    } catch (err) {
      console.log(err);
    }
    console.log('unsealed' + unsealed)











  }
  sealObject()






  return (
    <Layout title={title} description={description}>
      <LayoutIndent>
        Hey
      </LayoutIndent>
    </Layout>
  )
}

export default Template
