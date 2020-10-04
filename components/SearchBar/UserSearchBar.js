import { useState } from 'react'
import SearchBar from './SearchBar'


const UserSearchBar = () => {
  const [searchedValue, setSearchedValue] = useState()
  console.log(searchedValue)

  return (
    <SearchBar
      placeholder='Search for email..'
      onChange={setSearchedValue}
    />
  )
}

export default UserSearchBar