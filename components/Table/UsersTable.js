import { useState } from 'react'
import Table from './Table'
import TableHead from './TableHead'
import TableBody from './TableBody'
import TableRow from './TableRow'
import moment from 'moment'
import TablePagination from './TablePagination'
import Select from '../Select/Select'
import UserSearchBar from '../SearchBar/UserSearchBar'
import { gql, useQuery } from '@apollo/client'
import UserFragment from '../../assets/graphql/client/fragments/UserFragment'
import SignUpTypeIcon from '../utils/SignUpTypeIcon'


const UsersTable = () => {
  const [users, setUsers] = useState([])
  const [sort, setSort] = useState('asc')

  const [totalUsersCount, setTotalUsersCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const [searchedEmail, setSearchedEmail] = useState('')
  const [searchLoading, setSearchLoading] = useState()

  const [isLoading, setIsLoading] = useState(true)

  const limitOptions = [
    { value: '2', label: '2' },
    { value: '20', label: '20' },
    { value: '50', label: '50' },
    { value: '100', label: '100' },
    { value: '500', label: '500' },
    { value: '1000', label: '1000' }
  ]
  const [limitSelectedOption, setLimitSelectedOption] = useState(limitOptions[1])

  const UsersQuery = gql`
    query UsersQuery($limit: Int, $sort: String, $skip: Int, $email: String) {
      users(limit: $limit, sort: $sort, skip: $skip, email: $email) {
        ...userFields
      }
    }
    ${UserFragment}
  `
  useQuery(UsersQuery, {
    fetchPolicy: 'no-cache',
    variables: {
      sort: sort,
      limit: Number(limitSelectedOption.value),
      skip: ((currentPage - 1) * limitSelectedOption.value),
      email: searchedEmail
    },
    onCompleted: data => {
      setUsers(data.users)
      isLoading && setIsLoading(false)
      setSearchLoading(false)
    },
    onError: err => {
      console.log(err)
      setSearchLoading(false)
    }
  })


  const CountUsersQuery = gql`
    query CountUsersQuery($email: String) {
      countUsers(email: $email)
    }
  `
  useQuery(CountUsersQuery, {
    fetchPolicy: 'no-cache',
    variables: {
      email: searchedEmail
    },
    onCompleted: data => {
      setTotalUsersCount(data.countUsers)
    },
    onError: err => {
      console.log(err)
    }
  })

  const toggleSort = () => {
    (sort === 'asc') ? setSort('desc') : setSort('asc')
  }

  const headOptions = ['Email', 'Registration Date', 'Via', '']


  return (
    <>
      <div className='mb-2 flex items-center justify-between'>
        <UserSearchBar setSearchedEmail={setSearchedEmail} isLoading={searchLoading} setSearchLoading={setSearchLoading} />
        <span>
          Limit:
          <Select
            className='inline-grid w-24 ml-1'
            defaultValue={limitSelectedOption}
            onChange={setLimitSelectedOption}
            options={limitOptions}
          />
        </span>
      </div>
      <Table>
        <TableHead options={headOptions} toggleSort={toggleSort} />
        <TableBody>
          {
            !isLoading ? users?.map(value => {
              const rowOptions = [value.email, moment(value.registrationDate).format('DD MMM YYYY'), <SignUpTypeIcon user={value} />]
              return (
                <TableRow
                  options={rowOptions}
                  detailsLink={`/admin/user/${value._id}`}
                  role={value.role}
                  key={value._id}
                />
              )
            }) :
              <TableRow loading={{ rows: 5 }} />
          }
          <TablePagination totalUsersCount={totalUsersCount} currentPage={currentPage} setCurrentPage={setCurrentPage} limit={limitSelectedOption.value} />
        </TableBody>
      </Table>
    </>
  )
}


export default UsersTable