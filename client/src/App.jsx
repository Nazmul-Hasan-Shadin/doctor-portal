import { useState } from 'react'
import {createBrowserRouter,
  Route, RouterProvider,} from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home/Home'
import Appointment from './components/Appointment/Appointment/Appointment'

const router= createBrowserRouter([
  {
    path:"/",
    element: <Home></Home>,
  },
  {
    path:'/appointment',
    element: <Appointment></Appointment>
  }
])

function App() {
  

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
       
    </>
  )
}

export default App
