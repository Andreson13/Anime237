import React from 'react'
import "./discovery.css"
import  {discouvery_pics} from ".././index"
import Card from "../../components/Popular_card"

const Discovery = () => {
  return (
    <section className='App__section' id="Discovery">
      <h1 className='header__text text_glow'>Discovery</h1>
        <div className="wrapper">
          {
            discouvery_pics.map((pic) => {
              return <Card img={pic}/>
            })
          }
        </div>
    </section>
  )
}

export default Discovery
