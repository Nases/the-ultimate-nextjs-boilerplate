const TableRow = () => {
  return (
    <tr className="bg-white border-b">
      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
        Jane Cooper
                  </td>
      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
        Regional Paradigm Technician
                  </td>
      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
        jane.cooper@example.com
                  </td>
      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
        Admin
                  </td>
      <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
      </td>
    </tr>
  )
}

export default TableRow