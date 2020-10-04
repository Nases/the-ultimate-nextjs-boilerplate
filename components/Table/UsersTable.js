import { useState, useEffect } from 'react'
import Table from './Table'
import TableHead from './TableHead'
import TableBody from './TableBody'
import TableRow from './TableRow'
import axios from 'axios'
import companyInfo from '../../assets/company-info'
import moment from 'moment'
import TablePagination from './TablePagination'


const UsersTable = () => {
  const [users, setUsers] = useState([])
  const [sort, setSort] = useState('asc')

  const [totalUsersCount, setTotalUsersCount] = useState(0)
  const [limit, setLimit] = useState(20)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    axios.post(`${companyInfo.serverURI}users?sort=${sort}&limit=${limit}&skip=${(currentPage - 1) * limit}`)
      .then(value => setUsers(value.data))
      .catch(err => console.log(err))
    totalUsersCount || axios.post(`${companyInfo.serverURI}users/count`)
      .then(value => setTotalUsersCount(value.data))
      .catch(err => console.log(err))
  }, [sort, currentPage, limit])

  const toggleSort = () => {
    (sort === 'asc') ? setSort('desc') : setSort('asc')
  }

  const headOptions = ['Email', 'Registration Date', '']

  return (
    <>
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
          <TablePagination totalUsersCount={totalUsersCount} currentPage={currentPage} setCurrentPage={setCurrentPage} limit={limit} />
        </TableBody>
      </Table>
    </>
  )
}

export default UsersTable