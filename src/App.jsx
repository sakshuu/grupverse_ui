import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MyNavbar } from './components'
import { Home, Login, Signup } from './pages'
import "./assets/css/index.css"

const App = () => {
  return <>
  <MyNavbar/>
  <Routes>
    <Route element={<Home/>} path="/"/>
    <Route element={<Login/>} path="/login"/>
    <Route element={<Signup/>} path="/signup"/>
  </Routes>
  </>
}

export default App