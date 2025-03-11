import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import HomePage from './pages/HomePage'
import store from './core/redux/store/store'

function App() {


  return (
    <Provider store={store}>
      <HomePage/>

    </Provider>
 
  )
}

export default App
