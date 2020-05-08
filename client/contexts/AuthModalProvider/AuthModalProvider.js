import React, { useReducer, createContext, useContext } from 'react'

const AuthModalStateContext = createContext()
const AuthModalDispatchContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_LOGIN_MODAL':
      state.loginModal.active = true
      console.log(state)
      return { ...state }
    case 'CLOSE_LOGIN_MODAL':
      state.loginModal.active = false
      console.log(state)
      return { ...state }
    case 'INCREASE_BY':
      return state + action.payload
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

export const AuthModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    loginModal: { active: false },
    registerModal: { active: false },
    forgotPasswordModal: { active: false }
  })
  return (
    <AuthModalDispatchContext.Provider value={dispatch}>
      <AuthModalStateContext.Provider value={state}>
        {children}
      </AuthModalStateContext.Provider>
    </AuthModalDispatchContext.Provider>
  )
}

export const useAuthModal = () => useContext(AuthModalStateContext)
export const useDispatchAuthModal = () => useContext(AuthModalDispatchContext)