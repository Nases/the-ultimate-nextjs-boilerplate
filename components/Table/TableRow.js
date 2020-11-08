import { useRouter } from 'next/router'
import Badge from '../Badge/Badge'
import Skeleton from 'react-loading-skeleton'


const TableRow = ({ options, detailsLink, role, loading }) => {
  const router = useRouter()


  if (!loading) {
    return (
      <tr onClick={() => router.push(detailsLink)} className="bg-white border-b hover:bg-gray-50 cursor-pointer">
        {options?.map((value, index) => {
          return (
            <td className={`px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900 ${(index === 0) && 'max-w-xs w-2/5 overflow-hidden'}`}
              key={detailsLink + value}
            >
              {value}
            </td>
          )
        })}
        <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
          <Badge color={(role === 'ADMIN') ? 'blue' : 'green'} size='small'>
            {(role === 'ADMIN') ? 'Admin' : 'Customer'}
          </Badge>
        </td>
      </tr>
    )
  } else {
    return (
      <>
        <tr className="bg-white border-b hover:bg-gray-50 cursor-pointer">
          <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900" colSpan={100} >
            <Skeleton height={20} width={500} />
          </td>
        </tr>
        <tr className="bg-white border-b hover:bg-gray-50 cursor-pointer">
          <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900" colSpan={100} >
            <Skeleton height={20} width={300} />
          </td>
        </tr>
        <tr className="bg-white border-b hover:bg-gray-50 cursor-pointer">
          <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900" colSpan={100} >
            <Skeleton height={20} width={600} />
          </td>
        </tr>
        <tr className="bg-white border-b hover:bg-gray-50 cursor-pointer">
          <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900" colSpan={100} >
            <Skeleton height={20} width={300} />
          </td>
        </tr>
        <tr className="bg-white border-b hover:bg-gray-50 cursor-pointer">
          <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900" colSpan={100} >
            <Skeleton height={20} width={400} />
          </td>
        </tr>
      </>
    )
  }
}


export default TableRow