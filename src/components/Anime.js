import React from 'react'
import { useAnimeContext } from '../context/Anime'
import {Link} from 'react-router-dom';
import '../css/Popular.css'
import { useGlobalContext } from '../context/Global';

const Anime = () => {
  const {anime} = useAnimeContext();
  const {isSearch} = useGlobalContext(); 
  const conditionalRender = () => {
    console.log(isSearch);
    if(anime){
      return anime.map((each) => (
        <div className="card-view" key={each.mal_id}>
          <Link to={`/anime/${each.mal_id}`}>
          <div className="card" >
            <div className="img-anime">
              <img src={each.images.jpg.image_url} alt="images"/>
            </div>
            <div className="card-title">
              {each.title}
            </div>
          </div>
        </Link>
        </div>
      ));
    }
  }
  return (
    <div className="container-anime">
        {conditionalRender()}
    </div>
  )
}

export default Anime;