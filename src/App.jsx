import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home.jsx"
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/register" element = {<Register />} />
        <Route path="/login" element = {<Login />} />
      </Routes>
    </>
  )
}

export default App
