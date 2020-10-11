import { useState, useEffect } from 'react'
import Stats from './Stats'
import axios from 'axios'
import settings from '../../assets/settings'

const TotalUsersStats = ({ daysBefore }) => {
  const [current, setCurrent] = useState(null)
  const [from, setFrom] = useState(null)

  useEffect(() => {
    axios.post(settings.serverURI + 'users/count').then(value => setCurrent(value.data))
    axios.post(settings.serverURI + `users/count/${daysBefore}`).then(value => setFrom(value.data))
  }, [daysBefore])

  return (
    <Stats
      name='Total Users'
      current={current}
      from={from}
    />
  )
}

export default TotalUsersStats