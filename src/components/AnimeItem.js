import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../css/Popular.css';

const AnimeItem = () => {
    const { id } = useParams();

    const [anime, setAnime] = React.useState([]);
    const [characters, setCharacters] = React.useState([]);

    const getAnimeById = async () => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
        const data = await response.json();
        console.log(data.data);
        setAnime(data.data);
    }

    const getCharactersById = async () => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`);
        const data = await response.json();
        setCharacters(data.data);
        console.log(data.data);
    }

    useEffect(() => {
        getAnimeById();
        getCharactersById();
    }, [])

    return (
        <div className='container-anime'>
            <Navbar />
            <div className="details">
                <div className="firstHalf">
                    <img src={anime.images?.jpg?.image_url} />
                </div>
                <div className="secondHalf">
                    <span>Aired: <p>{anime.aired && anime.aired.string}</p></span>
                    <span>Title: <p>{anime.title}</p></span>
                    <span>Episode: <p>{anime.episodes}</p></span>
                    <span>Season: <p>{anime.season}</p></span>
                    <span>Duration: <p>{anime.duration}</p></span>
                    <span>Rating: <p>{anime.rating}</p></span>
                    <span>Score: <p>{anime.score}</p></span>
                </div>
            </div>
            <div className="trailerView">
                <h1>Trailer:</h1>
                <iframe width={500} height={315} src={anime.trailer && anime.trailer.embed_url}
                    title={anime.title} allow="accelerometer; autoplay; clipboard-write; encryted-media; gyroscope, picture-in-picture"
                    allowFullScreen>
                </iframe>
            </div>

            <h1>Characters:</h1>

            {characters.map((each) => {
                return <div className="card-view">
                    <Link to={`/character/${each.character.mal_id}`}>
                        <div className='card' key={each.character.mal_id}>
                            <img className="img-anime" src={each?.character?.images.jpg.image_url} />
                            <div className='card-title'>{each?.character.name}</div>
                        </div>
                    </Link>
                </div>
            })}

        </div>
    )
}

export default AnimeItem
