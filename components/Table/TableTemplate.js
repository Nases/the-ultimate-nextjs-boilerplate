import Table from './Table'
import TableHead from './TableHead'
import TableBody from './TableBody'
import TableRow from './TableRow'


const TableTemplate = () => {

  const headOptions = ['Email', 'Role']
  const rowOptions = ['jane.cooper@example.com', 'Admin']


  return (
    <Table>
      <TableHead options={headOptions} />
      <TableBody>
        <TableRow options={rowOptions} detailsLink={`/admin/user/${123123}`} />
        <TableRow options={rowOptions} detailsLink={`/admin/user/${123123}`} />
        <TableRow options={rowOptions} detailsLink={`/admin/user/${123123}`} />
      </TableBody>
    </Table>
  )
}

export default TableTemplate