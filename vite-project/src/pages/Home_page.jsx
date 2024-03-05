import React from 'react'
import Nav from '../container/Nav/Nav'
import Home from '../container/Home/Home'
import Popular from '../container/Popular/Popular'
import Discovery from '../container/Discovery/Discovery'
import About from '../container/About/About'

const Home_page = () => {
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

export default Home_page
