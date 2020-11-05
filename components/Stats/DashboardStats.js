import { useState } from 'react'
import Stats from './Stats'
import StatsContainer from './StatsContainer'
import TotalUsersStats from './TotalUsersStats'
import Select from '../Select/Select'


const DashboardStats = () => {
  const options = [
    { value: '7', label: '7' },
    { value: '30', label: '30' },
    { value: '60', label: '60' },
    { value: '180', label: '180' },
    { value: '360', label: '360' }
  ]

  const [selectedOption, setSelectedOption] = useState(options[1])

  return (
    <>
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Last
        <Select
          className='inline-grid w-24 mx-1'
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
        days
      </h3>
      <StatsContainer>
        <TotalUsersStats daysBefore={selectedOption.value} />
        {/* <Stats />
        <Stats /> */}
      </StatsContainer>
    </>
  )
}


export default DashboardStats