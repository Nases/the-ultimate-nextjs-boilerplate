import { useState } from 'react'

const Accordion = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10 border-b-2 border-gray-200 pb-6">
            Frequently asked questions
          </h2>
          <div>
            <dl>
              <AccordionItem />
              <AccordionItem />
              <AccordionItem />
            </dl>
          </div>
        </div>
      </div>
    </div >

  )
}

const AccordionItem = () => {
  const [active, setActive] = useState(false)

  return (
    <div className="mt-6 border-b border-gray-200 pb-6">
      <dt className="text-lg leading-7">
        <button onClick={() => setActive(prevState => !prevState)} className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none">
          <span className="font-medium text-gray-900">
            What's the best thing about Switzerland?
          </span>
          <span className="ml-6 h-7 flex items-center">
            <svg className={`${active ? 'rotate-0' : 'rotate-180'} h-6 w-6 transform transition duration-200 ease-in-out`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
      </dt>
      <dd
        className='mt-2 pr-12 overflow-hidden transition-all duration-200 ease-linear'
        style={{
          maxHeight: active ? 100 : 0
        }}
      >
        <p className="text-base leading-6 text-gray-500">
          I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
        </p>
      </dd>
    </div>
  )
}

export default Accordion