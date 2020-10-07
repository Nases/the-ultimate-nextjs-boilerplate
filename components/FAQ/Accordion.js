import { useState, createContext, useContext } from 'react'

const Accordion = ({ children }) => {

  return (
    <div className="bg-gray-50">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10 pb-10">
            Frequently asked questions
          </h2>
          <div>
            <dl>
              {children}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}


const AccordionStateContext = createContext()

const AccordionItem = ({ children }) => {
  const [active, setActive] = useState(false)

  return (
    <AccordionStateContext.Provider value={{ active: active }}>
      <div onClick={() => setActive(prevState => !prevState)} className="py-6 border-b border-gray-200 cursor-pointer">
        {children}
      </div>
    </AccordionStateContext.Provider>
  )
}

const AccordionHead = ({ active, children }) => {
  const accordionState = useContext(AccordionStateContext)
  var active = accordionState.active

  return (
    <dt className="text-lg leading-7">
      <button className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none">
        <span className="font-medium text-gray-900">
          {children}
        </span>
        <span className="ml-6 h-7 flex items-center">
          <svg className={`${active ? 'rotate-0' : 'rotate-180'} h-6 w-6 transform transition duration-200 ease-in-out`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
    </dt>
  )
}

const AccordionBody = ({ active, children }) => {
  const accordionState = useContext(AccordionStateContext)
  var active = accordionState.active

  return (
    <dd
      className='pr-12 overflow-hidden transition-all duration-200 ease-linear'
      style={{
        maxHeight: active ? 100 : 0
      }}
    >
      <p className="text-base leading-6 text-gray-500 mt-2">
        {children}
      </p>
    </dd>
  )
}

Accordion.Item = AccordionItem
Accordion.Head = AccordionHead
Accordion.Body = AccordionBody

export default Accordion