import React from 'react'
import "./index.css"
import {useRef} from "react"
import {  BsMenuDown, BsSearch,BsCrosshair} from "react-icons/bs"

function Nav() {

  const mobile_menu = useRef()

  function toggle_menu() {
      mobile_menu.current.classList.toggle("show")
      mobile_menu.current.focus()
  }

  return (
    <section className="App__section navigation" >
      <nav>


        <div className='Name_logo'>
          <h2 className='header__text name'>CamArtia</h2>
        </div>

        <div className='links'>
          <ul className='p__text text_glow'>
            <a href="#">Home</a>
            <a href="#Popular" className="link_popular">Popular</a>
            <a href="#Discovery" className="link_discovery"><label htmlFor="Discovery">Discovery</label></a> 
            <a href="#About" className="link_discovery"><label htmlFor="Discovery">About</label></a> 
          </ul>
        </div>

        <div className="Menu_search">
          <div className='search-icon'>
            <BsSearch className='search' title='Search for more'/>
            <BsMenuDown className='search menu_btn'  onClick={toggle_menu} />
          </div>
            <div className='Mobile_menu' ref={mobile_menu}>
            <BsMenuDown className='Mobile__menu--btn' onClick={toggle_menu}/>
            <a href="#Home" className="link_home"><label htmlFor="home">Home</label></a>
            <a href="#Popular" className="link_popular"><label htmlFor="Popular">Popular</label></a>
            <a href="#Discovery" className="link_discovery"><label htmlFor="Discovery">Discovery</label></a> 
            <a href="#About" className="link_discovery"><label htmlFor="Discovery">About</label></a> 
            </div>
        </div>
      </nav>
    </section>
  )
}

export default Nav
