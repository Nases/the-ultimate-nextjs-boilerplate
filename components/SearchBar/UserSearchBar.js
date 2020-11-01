import SearchBar from './SearchBar'


const UserSearchBar = ({ setSearchedEmail, isLoading, setSearchLoading }) => {
  return (
    <SearchBar
      placeholder='Search for email..'
      onChange={setSearchedEmail}
      isLoading={isLoading}
      setSearchLoading={setSearchLoading}
    />
  )
}


export default UserSearchBar