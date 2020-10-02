import { useRouter } from 'next/router'

const TableRow = ({ options, detailsLink }) => {
  const router = useRouter()

  return (
    <tr onClick={() => router.push(detailsLink)} className="bg-white border-b hover:bg-gray-50 cursor-pointer">
      {options.map(value => {
        return (
          <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900" key={detailsLink}>
            {value}
          </td>
        )
      })}
    </tr>
  )
}

export default TableRow