import { Component } from 'react'
import axios from 'axios'


const withAuth = C => {
  // console.log('helluuu')
  // console.log(props)
  return class ensureAuth extends Component {
    render() {
      return <C />
    }
  }
}


export async function getServerSideProps() {
  console.log('hellu 2')

  return { props: { asd: 'asd' } }

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

