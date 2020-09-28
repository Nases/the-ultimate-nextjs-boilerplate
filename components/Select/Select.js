import Select from "react-select"


const SelectComponent = (props) => {
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
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: '0.5rem'
    })
  }

  const theme = theme => ({
    ...theme,
    borderRadius: 0,
    colors: {
      ...theme.colors,
      primary50: '#EBF4FF',
      primary25: '#EBF4FF',
      primary: '#5850ec',
      neutral90: 'blue'
    },
  })

  return (
    <Select
      {...rest}
      className={className}
      styles={customStyles}
      defaultValue={defaultValue}
      onChange={onChange}
      options={options}
      isClearable={false}
      isSearchable={false}
      theme={theme}
    />
  )
}

export default SelectComponent