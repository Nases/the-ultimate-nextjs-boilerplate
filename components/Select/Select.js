import React, { useState } from "react"
import Select from "react-select"

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

const SelectComponent = () => {
  const [selectedOption, setSelectedOption] = useState(null)

  return (
    <Select
      defaultValue={selectedOption}
      onChange={setSelectedOption}
      options={options}
      isClearable={false}
      isSearchable={false}
    />
  )
}

export default SelectComponent