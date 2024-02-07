import { configureStore, Tuple } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import rootReducer from './root-reducer'

const store = configureStore({
  reducer: rootReducer,
  middleware: () => new Tuple(logger)
})

export type RootState = ReturnType<typeof store.getState>

export default store
