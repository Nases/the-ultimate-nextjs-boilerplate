import React, { useReducer, createContext, useContext } from 'react'

const UserStateContext = createContext()
const UserDispatchContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      state = action.userData
      return { ...state }
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    id: 'this will be id',
    email: 'asdasd@asd.asd',
    password: 'asdasd'
  })
  return (
    <UserDispatchContext.Provider value={dispatch}>
      <UserStateContext.Provider value={state}>
        {children}
      </UserStateContext.Provider>
    </UserDispatchContext.Provider>
  )
}

export const useUser = () => useContext(UserStateContext)
export const useDispatchUser = () => useContext(UserDispatchContext)