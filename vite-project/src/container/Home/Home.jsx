import React from 'react'
import "./index.css"

const Home = () => {
  return (
    <section className='App__section'   id="Home">
      <div className=' text_glow load_animation'>
          <h2 className="animate_name">CamArtia</h2>
      </div>
      <div className="">
        <h2 className="slogan header__text">UNVEILING <span className="text_glow">CAMEROONAIN</span> ARTISTIQUE HERITAGE</h2>
      </div>
      <p className='p__text' style={{fontWeight:"900"}}>
        <span className='quotes text_glow'>"</span> Through anime, we learn the power of resilience and the beauty of overcoming challenges. A lesson that resonates deeply in the hearts of Cameroonians  <span className='quotes text_glow'>"</span><br/> - MB, Cameroon
      </p>
    </section>
  )
}

export default Home
