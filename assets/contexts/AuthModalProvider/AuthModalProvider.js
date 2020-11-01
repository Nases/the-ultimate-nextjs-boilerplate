import React, { useReducer, createContext, useContext } from 'react'

const AuthModalStateContext = createContext()
const AuthModalDispatchContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_LOGIN_MODAL':
      state.logInModal.active = true
      state.signUpModal.active = false
      state.forgotPasswordModal.active = false
      return { ...state }
    case 'CLOSE_LOGIN_MODAL':
      state.logInModal.active = false
      return { ...state }
    case 'OPEN_SIGN_UP_MODAL':
      state.logInModal.active = false
      state.signUpModal.active = true
      state.forgotPasswordModal.active = false
      return { ...state }
    case 'CLOSE_SIGN_UP_MODAL':
      state.signUpModal.active = false
      return { ...state }
    case 'OPEN_FORGOT_PASSWORD_MODAL':
      state.logInModal.active = false
      state.signUpModal.active = false
      state.forgotPasswordModal.active = true
      return { ...state }
    case 'CLOSE_FORGOT_PASSWORD_MODAL':
      state.forgotPasswordModal.active = false
      return { ...state }
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

export const AuthModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    logInModal: { active: false },
    signUpModal: { active: false },
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