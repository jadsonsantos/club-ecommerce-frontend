import cartReducer from './toolkit/cart/cart.slice'
import categoryReducer from './toolkit/category/category.slice'
import userReducer from './toolkit/user/user.slice'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  userReducer,
  cartReducer,
  categoryReducer
})

export default rootReducer
