import React from 'react'
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Navbar';
import Home from './Home'
import About from './About'
import Register from './Register'

const App = () => {
  return (
    <>
      
      <Router>
      <Navbar /> 
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
      </Router>

    </>
  )
}

export default App
