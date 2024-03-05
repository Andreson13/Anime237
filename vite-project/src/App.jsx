import React from 'react'
import "./App.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home_page from './pages/Home_page'
import Search_page from './pages/Search_page'
import Anime from './pages/Anime'
import { useGlobalContext } from './context/gobal'




const App = () => {
  return (
    <>
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home_page/>}/>
            <Route path='/Search' element={<Search_page/>}/>
            <Route path='/Search/anime/:id' element={<Anime/>}/>
        </Routes>
     </BrowserRouter> 
    </>
     
  )
}

export default App
