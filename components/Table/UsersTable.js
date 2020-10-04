import { useState, useEffect } from 'react'
import Table from './Table'
import TableHead from './TableHead'
import TableBody from './TableBody'
import TableRow from './TableRow'
import axios from 'axios'
import companyInfo from '../../assets/company-info'
import moment from 'moment'
import TablePagination from './TablePagination'
import Select from '../Select/Select'
import UserSearchBar from '../SearchBar/UserSearchBar'


const UsersTable = () => {
  const [users, setUsers] = useState([])
  const [sort, setSort] = useState('asc')

  const [totalUsersCount, setTotalUsersCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const [searchedEmail, setSearchedEmail] = useState('')

  const limitOptions = [
    { value: '2', label: '2' },
    { value: '20', label: '20' },
    { value: '50', label: '50' },
    { value: '100', label: '100' },
    { value: '500', label: '500' },
    { value: '1000', label: '1000' }
  ]
  const [limitSelectedOption, setLimitSelectedOption] = useState(limitOptions[1])
  console.log('test yooo')

  useEffect(() => {
    axios.post(`${companyInfo.serverURI}users?sort=${sort}&limit=${limitSelectedOption.value}&skip=${(currentPage - 1) * limitSelectedOption.value}&email=${searchedEmail}`)
      .then(value => setUsers(value.data))
      .catch(err => console.log(err))

    axios.post(`${companyInfo.serverURI}users/count?email=${searchedEmail}`)
      .then(value => setTotalUsersCount(value.data))
      .catch(err => console.log(err))

  }, [sort, currentPage, limitSelectedOption, searchedEmail])

  const toggleSort = () => {
    (sort === 'asc') ? setSort('desc') : setSort('asc')
  }

  const headOptions = ['Email', 'Registration Date', '']

  return (
    <>
      <div className='mb-2 flex items-center justify-between'>
        <UserSearchBar setSearchedEmail={setSearchedEmail} />
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
          {users.map(value => {
            const rowOptions = [value.email, moment(value.registrationDate).format('DD MMM YYYY')]
            return (
              <TableRow
                options={rowOptions}
                detailsLink={`/admin/user/${value._id}`}
                subscriber={users.subscriber}
                key={value._id}
              />
            )
          })}
          <TablePagination totalUsersCount={totalUsersCount} currentPage={currentPage} setCurrentPage={setCurrentPage} limit={limitSelectedOption.value} />
        </TableBody>
      </Table>
    </>
  )
}

export default UsersTable