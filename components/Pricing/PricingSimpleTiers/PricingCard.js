import Button from '../../Button/Button'


const Includes = ({ children }) => {
  return (
    <li className="flex space-x-3">
      <svg className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
      <span className="text-sm leading-5 text-gray-500">{children}</span>
    </li>
  )
}

const PricingCard = ({ price, description, includes, buttonColor }) => {
  return (
    <div className="rounded-lg shadow-sm bg-white flex justify-between flex-col">
      <div>
        <div className="px-6 text-center">
          <p className="mt-8 align-top inline-flex">
            <span className='font-bold mr-2 mt-1'>$</span>
            {' '}
            <span className="text-4xl leading-10 font-extrabold text-gray-900">{price}</span>
          </p>
          <p className="mt-2 text-sm leading-5 text-gray-500">{description}</p>
        </div>
        <div className="px-6">
          <ul className="mt-8 space-y-4">
            {includes?.map(value => {
              return (
                <Includes key={value}>{value}</Includes>
              )
            })}
          </ul>
        </div>
      </div>
      <div className="pb-8 px-6">
        <Button className='mt-8 w-full py-3' color={buttonColor}>Upgrade & Download</Button>
      </div>
    </div>
  )
}


export default PricingCard