import React from 'react'
import "./index.css"
import { useGlobalContext } from '../context/gobal'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import "./Popular.css"

const Popular = ({search}) => {

  const [content, setContent] = useState("content not found")

  const {popularAnime,isSearch} = useGlobalContext()

  const conditionalRendering = () => {

    if(!isSearch){
      return popularAnime.map((anime) => {
        const value = search.toString().toLowerCase()
        if(anime?.titles[3]?.title.toString().toLowerCase().includes(value)){
          return (
          <Link to={`/Search/anime/${anime.mal_id}`} key={anime.mal_id}>
          <img src={anime.images.jpg.large_image_url} alt="" onLoad={() => setContent("")}/>
          </Link>
          )
        }
       
        
      })

    }
  
  }

  console.log(content)
  
  return (
    
    <div className='search_wrapper'>
        <div className="popular_anime">
          {conditionalRendering()}
          <h3>
            {content}
          </h3>
        </div>
    </div> 

  )
}


export default Popular
