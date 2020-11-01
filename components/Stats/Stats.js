import Skeleton from 'react-loading-skeleton'


const Stats = ({ name, current, from }) => {
  const Percentage = () => {
    var percentage = ((current - from) / (from) * 100).toFixed(0)


    return (
      <>
        {
          (percentage >= 0) ?
            <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium leading-5 bg-green-100 text-green-800 md:mt-2 lg:mt-0">
              <svg className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              {percentage}%
            </div>
            :
            <div class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium leading-5 bg-red-100 text-red-800 md:mt-2 lg:mt-0">
              <svg class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              {percentage.substring(1)}%
            </div>
        }
      </>
    )
  }


  return (
    <div className="px-4 py-5 sm:p-6 col-span-1 shadow bg-white rounded-lg">
      <dl>
        <dt className="text-base leading-6 font-normal text-gray-900">
          {name || 'Total Subscribers'}
        </dt>
        {
          (Number.isInteger(current) && Number.isInteger(from)) ?
            <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
              <div className="flex items-baseline text-2xl leading-8 font-semibold text-indigo-600">
                {current}
                <span className="ml-2 text-sm leading-5 font-medium text-gray-500">
                  from {from}
                </span>
              </div>
              <Percentage current={current} from={from} />
            </dd>
            : <Skeleton className='mt-3' height={24} />
        }
      </dl>
    </div>
  )
}


export default Stats