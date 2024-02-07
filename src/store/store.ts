import { configureStore, Tuple } from '@reduxjs/toolkit'
import logger from 'redux-logger'
// @ts-ignore
import persistReducer from 'redux-persist/es/persistReducer'
// @ts-ignore
import persistStore from 'redux-persist/es/persistStore'
// @ts-ignore
import storage from 'redux-persist/lib/storage'

import rootReducer from './root-reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartReducer']
}

const persistedRootReducer: typeof rootReducer = persistReducer(
  persistConfig,
  rootReducer
)

export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: () => new Tuple(logger)
})

export const persistedStore = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
