import React, { useReducer, createContext, useContext } from 'react'

const MobileMenuStateContext = createContext()
const MobileMenuDispatchContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'OPEN':
      state.isActive = true
      return { ...state }
    case 'CLOSE':
      state.isActive = false
      return { ...state }
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

export const MobileMenuProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    isActive: false
  })
  return (
    <MobileMenuDispatchContext.Provider value={dispatch}>
      <MobileMenuStateContext.Provider value={state}>
        {children}
      </MobileMenuStateContext.Provider>
    </MobileMenuDispatchContext.Provider>
  )
}

export const useMobileMenu = () => useContext(MobileMenuStateContext)
export const useDispatchMobileMenu = () => useContext(MobileMenuDispatchContext)