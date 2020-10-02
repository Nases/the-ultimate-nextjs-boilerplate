import { useState, useEffect } from 'react'
import Table from './Table'
import TableHead from './TableHead'
import TableBody from './TableBody'
import TableRow from './TableRow'
import axios from 'axios'
import companyInfo from '../../assets/company-info'


const TableTemplate = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get(companyInfo.serverURI + 'users').then(value => setUsers(value.data))
  }, [])

  console.log(users)


  const headOptions = ['Email']
  const rowOptions = ['jane.cooper@example.com']


  return (
    <Table>
      <TableHead options={headOptions} />
      <TableBody>
        {users.map(value => {
          return (
            <TableRow options={[value.email]} detailsLink={`/admin/user/${123123}`} />
          )
        })}
      </TableBody>
    </Table>
  )
}

export default TableTemplate