import SearchBar from './SearchBar'


const UserSearchBar = ({ setSearchedEmail }) => {
  return (
    <SearchBar
      placeholder='Search for email..'
      onChange={setSearchedEmail}
    />
  )
}

export default UserSearchBar