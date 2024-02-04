import React from 'react'
import Nav from "./container/Nav/Nav"
import Discovery from "./container/Discovery/Discovery"
import Home from "./container/Home/Home"
import Popular from "./container/Popular/Popular"
import About from "./container/About/About"
import "./App.css"

const App = () => {
  return (
    <>
      <Nav/>
      <Home/>
      <Popular/>
      <Discovery/>
      <About/>
    </>
     
  )
}

export default App
