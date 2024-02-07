import CartProduct from 'types/cart.types'

import CartActionTypes from './cart.action-types'

interface InitialState {
  isVisible: boolean
  products: CartProduct[]
  productsTotalPrice: number
  productsCount: number
}

const initialState: InitialState = {
  isVisible: false,
  products: [],
  productsTotalPrice: 0,
  productsCount: 0
}

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CartActionTypes.toggleCart:
      return { ...state, isVisible: !state.isVisible }
    default:
      return { ...state }
  }
}

export default cartReducer
