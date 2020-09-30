import Table from './Table'
import TableHead from './TableHead'
import TableBody from './TableBody'
import TableRow from './TableRow'


const TableTemplate = () => {

  const options = ['Email', 'Title', 'Email', 'Role', '']


  return (
    <Table>
      <TableHead options={options} />
      <TableBody>
        <TableRow />
        <TableRow />
        <TableRow />
      </TableBody>
    </Table>
  )
}

export default TableTemplate