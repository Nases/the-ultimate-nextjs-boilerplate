
const TableRow = ({ options }) => {
  return (
    <tr className="bg-white border-b">
      {options.map(value => {
        return (
          <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
            {value}
          </td>
        )
      })}
      <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
      </td>
    </tr>
  )
}

export default TableRow