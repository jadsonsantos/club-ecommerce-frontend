import User from 'types/user.types'

import UserActionTypes from './user.action-types'

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
    case UserActionTypes.LOGIN:
      return { ...state, currentUser: action.payload, isAuthenticated: true }
    case UserActionTypes.LOGOUT:
      return { ...state, currentUser: null, isAuthenticated: false }
    default:
      return { ...state }
  }
}

export default userReducer
