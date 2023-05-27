import './App.css'
import React from 'react'
import router from './pages/routers'
import { RouterProvider } from 'react-router'
function App() {
  return (
   <RouterProvider router={router}/>
  )
}

export default App
