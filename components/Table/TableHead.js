import { useState, useEffect } from 'react'


const TableHead = ({ options, toggleSort }) => {
  const [isReversed, setIsReversed] = useState(false)

  useEffect(() => {

  }, [isReversed])

  return (
    <thead className='bg-primary-700 text-white'>
      <tr>
        {options.map(value => {
          return (
            value === 'Registration Date' ?
              <th
                onClick={() => {
                  toggleSort()
                  setIsReversed(!isReversed)
                }}
                className='px-6 py-3 text-left text-xs leading-4 font-medium uppercase tracking-wider cursor-pointer'
                key={value}
              >
                {value}
                {' '}
                {isReversed ? <i aria-hidden className="fas fa-angle-down"></i> : <i aria-hidden className="fas fa-angle-up"></i>}
              </th>
              :
              <th
                className="px-6 py-3 text-left text-xs leading-4 font-medium uppercase tracking-wider"
                key={value}
              >
                {value}
              </th>
          )
        })}
      </tr>
    </thead>
  )
}


export default TableHead