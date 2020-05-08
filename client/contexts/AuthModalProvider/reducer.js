export const reducer = (state, action) => {
  switch (action.type) {
    case 'ACTIVATE_LOGIN_MODAL':
      return [
        state.loginModal.active = !state.loginModal.active
      ]
    case 'ACTIVATE_REGISTER_MODAL':
    // return state.filter(book => book.id !== action.id)
    case 'ACTIVATE_FORGOT_PASSWORD_MODAL':
    // return state.filter(book => book.id !== action.id)
    default:
      return state
  }
}