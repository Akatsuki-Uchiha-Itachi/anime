import React, { useEffect } from 'react'
import { useAnimeContext } from '../context/Anime';
import { useGlobalContext } from '../context/Global';
import Anime from './Anime';
import '../css/Popular.css'
import Navbar from './Navbar';


const Popular = () => {

    const {popularAnime}= useGlobalContext();
    const {setAnime} = useAnimeContext();
    
    useEffect(()=>{
      setAnime(popularAnime);
    },[])
  return (
        <div className="container-popular">
            {<Navbar/>}
            {<Anime/>}
        </div>
  )
}

export default Popular;
