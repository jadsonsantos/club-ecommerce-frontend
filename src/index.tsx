import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import CategoryContextProvider from 'contexts/categories.context'
// @ts-ignore
import { PersistGate } from 'redux-persist/integration/react'
import { persistedStore, store } from 'store/store'

import App from './App'
import reportWebVitals from './reportWebVitals'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <CategoryContextProvider>
          <App />
        </CategoryContextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
