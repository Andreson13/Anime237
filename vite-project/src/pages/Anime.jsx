import "./Anime.css"
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Anime = () => {
  const { id } = useParams();

  const [anime, setAnime] = useState({});
  const [characters, setCharacters] = useState([]);
  const [showMore, setShowmore] = useState(false);

  const {
    title,
    synopsis,
    trailer,
    duration,
    aired,
    season,
    images,
    rank,
    score,
    scored_by,
    popularity,
    status,
    rating,
    source,
  } = anime;

  const getAnime = async (anime) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`);
    const data = await response.json();
    setAnime(data.data);
  };

  const getCharacters = async(anime) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}/characters`)
    const data = await response.json()
    setCharacters(data.data)
    console.log(data.data)
  }

  useEffect(() => {
    getAnime(id);
    getCharacters(id)
  }, []);

  return (
    <section className="Anime">
      <h2 className="header">{title}</h2>
      <div className="details">
        <div className="detail">
          <div className="image">
            <img src={images?.jpg.large_image_url} alt="" />
          </div>
          <div className="anime-details paragraph">
            <p>
              <span>Aired:</span>
              <span>{aired?.string}</span>
            </p>
            <p>
              <span>Rating:</span>
              <span>{rating}</span>
            </p>
            <p>
              <span>Rank:</span>
              <span>{rank}</span>
            </p>
            <p>
              <span>Popularity:</span>
              <span>{popularity}</span>
            </p>
            <p>
              <span>Status:</span>
              <span>{status}</span>
            </p>
            <p>
              <span>Season:</span>
              <span>{season}</span>
            </p>
            <p>
              <span>Source:</span>
              <span>{source}</span>
            </p>
          </div>
        </div>
        <p className="description paragraph">
          {showMore ? synopsis : synopsis?.substring(0, 450) + "..."}
          <button
          className="text_glow"
            onClick={() => {
              setShowmore(!showMore);
            }}
          >
            {showMore ? "showless" : "showmore"}
          </button>
        </p>
      </div>

      <h3>Trailer</h3>
  
      <div className="trailer-con">
        {trailer?.embed_url && (
          <iframe src={trailer?.embed_url}
          width="800"
          height="450"
          allow="accelerometer;clipboard-write; encrypted-media"
          allowFullScreen></iframe>
        )}
      </div>

      <h3>Characters</h3>
      <div className="characters">
        {characters?.map((character,index) => {
          const {role} = character
          const {images,name,mal_id} = character.character
          return <div className="character" key={index}>
              <img src={images?.jpg.image_url} alt="" />
              <h4>{name}</h4>
              <p>{role}</p>
          </div>
        })}
      </div>

    </section>
  );
};

export default Anime;
