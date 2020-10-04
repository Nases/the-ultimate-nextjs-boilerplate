import { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import companyInfo from '../../assets/company-info'
import axios from 'axios'


const UserSearchBar = () => {
  const [searchedValue, setSearchedValue] = useState()

  useEffect(() => {
    axios.post(`${companyInfo.serverURI}users/search/email?email=${searchedValue}`).then(value => console.log(value.data))
  }, [searchedValue])

  return (
    <SearchBar
      placeholder='Search for email..'
      onChange={setSearchedValue}
    />
  )
}

export default UserSearchBar