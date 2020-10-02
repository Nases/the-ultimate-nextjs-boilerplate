
const TableHead = ({ options }) => {

  return (
    <thead className='bg-gray-500 text-white'>
      <tr>
        {options.map(value => {
          return (
            <th className="px-6 py-3 text-left text-xs leading-4 font-medium uppercase tracking-wider" key={value}>
              {value}
            </th>
          )
        })}
      </tr>
    </thead>
  )
}

export default TableHead