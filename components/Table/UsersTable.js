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

  useEffect(() => {
    axios.get(companyInfo.serverURI + 'users').then(value => setUsers(value.data))
  }, [])

  const headOptions = ['Email', 'Registration Date']

  return (
    <Table>
      <TableHead options={headOptions} />
      <TableBody>
        {users.map(value => {
          const rowOptions = [value.email, moment(value.registrationDate).format('DD MMM YYYY')]
          return (
            <TableRow
              options={rowOptions}
              detailsLink={`/admin/user/${value._id}`}
              key={value._id}
            />
          )
        })}
      </TableBody>
    </Table>
  )
}

export default UsersTable