import React, { useReducer, createContext, useContext } from 'react'

const UserStateContext = createContext()
const UserDispatchContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      state.isAuth = true
      state.isLoading = false
      state.data = action.userData
      return { ...state }
    case 'SIGN_OUT':
      state.isAuth = false
      state.isLoading = false
      state.data = {}
      return { ...state }
    case 'UPDATE':
      state.data = action.userData
      return { ...state }
    case 'UPDATE_EMAIL':
      state.data.email = action.email
      return { ...state }
    case 'UPDATE_PERSONAL_INFORMATION':
      state.data.firstName = action.firstName
      state.data.lastName = action.lastName
      return { ...state }
    case 'UPDATE_PASSWORD_LAST_UPDATED':
      state.data.passwordLastUpdated = action.passwordLastUpdated
      return { ...state }
    case 'SET_IS_LOADING_FALSE':
      state.isLoading = false
      return { ...state }
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    isAuth: false,
    isLoading: true,
    data: {
      id: '',
      email: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      password: '',
      passwordLastUpdated: ''
    }
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