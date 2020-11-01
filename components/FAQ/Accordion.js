import { useState, createContext, useContext } from 'react'


const AccordionStateContext = createContext()

const Accordion = ({ children }) => {
  const [currentId, setCurrentId] = useState(null)

  return (
    <AccordionStateContext.Provider value={{ currentId, setCurrentId }}>
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
    </AccordionStateContext.Provider>
  )
}


const AccordionItemStateContext = createContext()

const AccordionItem = ({ children, id, noBorderBottom }) => {
  const accordionState = useContext(AccordionStateContext)
  const setCurrentId = accordionState.setCurrentId
  const currentId = accordionState.currentId
  var active = currentId === id

  return (
    <AccordionItemStateContext.Provider value={{ active }}>
      <div onClick={() => {
        setCurrentId(prevState => prevState === id ? null : id)
      }}
        className={`${active ? 'text-primary-600' : 'text-gray-900'} ${noBorderBottom ? '' : 'border-b border-gray-200'} py-6 cursor-pointer hover:text-primary-600`}
      >
        {children}
      </div>
    </AccordionItemStateContext.Provider>
  )
}

const AccordionHead = ({ children }) => {
  const accordionItemState = useContext(AccordionItemStateContext)
  var active = accordionItemState.active

  return (
    <dt className="text-lg leading-7">
      <div className="text-left w-full flex justify-between items-start focus:outline-none">
        <span className='font-medium'>
          {children}
        </span>
        <span className="ml-6 h-7 flex items-center text-gray-400">
          <svg className={`${active ? 'rotate-0' : 'rotate-180'} h-6 w-6 transform transition duration-200 ease-in-out`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </div>
    </dt>
  )
}

const AccordionBody = ({ children }) => {
  const accordionItemState = useContext(AccordionItemStateContext)
  var active = accordionItemState.active

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