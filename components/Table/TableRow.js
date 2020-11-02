import { useRouter } from 'next/router'
import Badge from '../Badge/Badge'
import Skeleton from 'react-loading-skeleton'


const TableRow = ({ options, detailsLink, subscriber, loading }) => {
  const router = useRouter()


  if (!loading) {
    return (
      <tr onClick={() => router.push(detailsLink)} className="bg-white border-b hover:bg-gray-50 cursor-pointer">
        {options?.map(value => {
          return (
            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900" key={detailsLink + value}>
              {value}
            </td>
          )
        })}
        <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
          <Badge color={subscriber ? 'green' : 'blue'} size='small'>
            {subscriber ? 'Subscriber' : 'Non-Subscriber'}
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