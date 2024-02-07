import User from 'types/user.types'

interface InitialState {
  currentUser: User | null
  isAuthenticated: false
}

// const initialState: InitialState = {
//   currentUser: null,
//   isAuthenticated: false
// }

const userReducer = (state: InitialState, action: any) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return { ...state, currentUser: action.payload, isAuthenticated: true }
    case 'LOGOUT_USER':
      return { ...state, currentUser: null, isAuthenticated: false }
    default:
      return { ...state }
  }
}

export default userReducer
