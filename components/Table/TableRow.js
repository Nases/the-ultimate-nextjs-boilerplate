import Link from 'next/link'

const TableRow = ({ options, detailsLink }) => {
  return (
    <tr className="bg-white border-b hover:bg-gray-50 cursor-pointer">
      <Link href={detailsLink}>
        <a>
          {options.map(value => {
            return (
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                {value}
              </td>
            )
          })}
        </a>
      </Link>
    </tr>
  )
}

export default TableRow