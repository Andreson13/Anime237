import React from 'react'
import "./popular.css"
import {pics} from "../index"
import {BsArrowLeft,BsArrowRight} from "react-icons/bs"
import Popular_card from '../../components/Popular_card'
import {useRef,useState} from "react"



const Popular = () => { 
  let scroller = useRef(null)
  const [value,Setvalue] = useState(0)
  
  function next(){
    if(value < pics.length-1){
      Setvalue((value) => value+=1 )
    }else{
      Setvalue(0)
    }
    console.log(value)
  }

  

  function previor(){
    if(value > 0){
        Setvalue((value) => value-1)
    }
    else{
      Setvalue(pics.length)
    }
  } 
  
  return (
    <section className='App__section section__bg' id="Popular">
      <h1 className='header__text text_glow'>Popular</h1>
      <div className='container' ref={scroller}>
          {
            pics.map((pic, index ) => {
                return <div id='p_card'>
                  {/* <Popular_card img={pic} key={index}/> */}
                </div> 
            })
          }
      </div>
      <div className='directions'>
        <div className='direction_bg'><BsArrowLeft className='arrow' onClick={previor}/></div>
        <div className='direction_bg'><BsArrowRight className='arrow' onClick={next}/></div>
      </div>
    </section>
  )
}

export default Popular
