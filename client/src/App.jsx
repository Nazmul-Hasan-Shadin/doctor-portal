import { useState } from 'react'
import {createBrowserRouter,  createRoutesFromElements,
  Route, RouterProvider,} from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home/Home'

const router= createBrowserRouter(
  createRoutesFromElements(
     <Route path='/'element={<Home></Home>}>
    <Route path='/' element={<Home></Home>}></Route>



     </Route>
  )
)


function App() {
  

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
       
    </>
  )
}

export default App
