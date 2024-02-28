import { combineReducers } from 'redux'

import categoryReducer from './reducers/category/category.reducer'
import cartReducer from './toolkit/cart/cart.slice'
import userReducer from './toolkit/user/user.slice'

const rootReducer = combineReducers({
  userReducer,
  cartReducer,
  categoryReducer
})

export default rootReducer
