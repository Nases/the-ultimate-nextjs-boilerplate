import { useState, useEffect } from 'react'
import Table from './Table'
import TableHead from './TableHead'
import TableBody from './TableBody'
import TableRow from './TableRow'
import axios from 'axios'
import companyInfo from '../../assets/company-info'
import moment from 'moment'


const UsersTable = () => {
  const [users, setUsers] = useState([])
  const [sort, setSort] = useState('asc')

  useEffect(() => {
    axios.get(companyInfo.serverURI + 'users?sort=' + sort)
      .then(value => setUsers(value.data))
  }, [sort])

  const toggleSort = () => {
    (sort === 'asc') ? setSort('desc') : setSort('asc')
  }

  const headOptions = ['Email', 'Registration Date', '']

  return (
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
      </TableBody>
    </Table>
  )
}

export default UsersTable