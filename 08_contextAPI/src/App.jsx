import { useState } from 'react'
import Login from './Components/Login'
import Profile from './Components/Profile'

import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
