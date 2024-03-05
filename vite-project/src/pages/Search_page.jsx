import React from 'react'
import "./Search_page.css"
import {Routes,Route} from 'react-router-dom'
import Popular from "../components/Popular"
import { useState,useRef} from 'react'
import { useGlobalContext } from '../context/gobal'


const Search_page = () => {
  const [search,setSearch] = useState("")
  const searchValue = useRef("")

  function Submit(e){
      e.preventDefault()
      setSearch(searchValue.current.value)
  }

  return (
    <>
        <section className='search_page'>
        <h2 className='header__text text_glow' style={{margin:"1rem"}}>Popular Anime</h2>
          <div className='Search-bar'>
            <form onSubmit={Submit} className='search-area'>
              <input type="text" 
                placeholder='Search for an anime...'
                ref={searchValue}
              />
              <button onClick={Submit} className='text_glow'>Search</button>
            </form>
          </div>
          <Popular search={search}/>
        </section>
       
    </>
    
  )
}


export default Search_page
