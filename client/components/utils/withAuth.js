import { Component } from 'react'
import axios from 'axios'
// import { useUser, useDispatchUser } from '../../contexts/UserProvider/UserProvider'


const withAuth = (C) => {
  // const userData = useUser()
  // const dispatchUserData = useDispatchUser()

  return class ensureAuth extends Component {
    render() {
      return <C />
    }
  }
}


export async function getServerSideProps() {
  console.log('hellu 2')

  return {
    props: {
      hello: 'world',
    },
  }

  // axios.post('http://localhost:5000/ensure-auth', {
  //   asd: 'asd'
  // }, {
  //   withCredentials: true
  // })
  //   .then(response => {
  //     dispatchUserData({
  //       type: 'UPDATE_USER',
  //       userData: response
  //     })
  //     console.log(response)
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })


  // // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()

  // // Pass data to the page via props
  // return { props: { data } }
}






export default withAuth

