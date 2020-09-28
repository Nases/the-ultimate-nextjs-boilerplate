import { useState } from "react"
import Select from "react-select"

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ]

const SelectComponent = (props) => {
  // const [selectedOption, setSelectedOption] = useState(null)

  const { className, defaultValue, onChange, options, ...rest } = props


  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: '0.5rem',
      borderColor: 'transparent',
      boxShadow: 'none',
      "&:hover": {
        borderColor: "#transparent"
      },
    })
  }

  return (
    <Select
      {...rest}
      // className='shadow-none border-transparent'
      styles={customStyles}
      defaultValue={defaultValue}
      onChange={onChange}
      options={options}
      isClearable={false}
      isSearchable={false}
      theme={theme => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary50: '#EBF4FF',
          primary25: '#EBF4FF',
          primary: '#5850ec',
          neutral90: 'blue'
        },
      })}
    />
  )
}

export default SelectComponent