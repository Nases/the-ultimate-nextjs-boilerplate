import { useState, useEffect } from 'react'
import Stats from './Stats'
import axios from 'axios'
import companyInfo from '../../assets/company-info'

const TotalUsersStats = ({ daysBefore }) => {
  const [current, setCurrent] = useState(null)
  const [from, setFrom] = useState(null)

  useEffect(() => {
    axios.get(companyInfo.serverURI + 'count-users').then(value => setCurrent(value.data))
    axios.get(companyInfo.serverURI + `count-users/last-${daysBefore}-days`).then(value => setFrom(value.data))
  }, [])

  return (
    <Stats
      name='Total Users'
      current={current}
      from={from}
    />
  )
}

export default TotalUsersStats