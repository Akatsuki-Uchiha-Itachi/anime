import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAnimeContext } from '../context/Anime';
import { useGlobalContext } from '../context/Global';

const Navbar = () => {

    const [searchQuery,setSearchQuery] = React.useState('');
    const {setAnime} = useAnimeContext();
    const {setIsSearch,popularAnime} = useGlobalContext();
    const navigate = useNavigate();

    const onChangeHandle =(e) =>{
        setSearchQuery(e.target.value);
    }

    const onSubmitHandle = (e) =>{
        e.preventDefault();
        setIsSearch(true);
        console.log('searchQuery: ' + searchQuery);
        getAnimeByName();
        if(window.location.pathname !== '/'){
            navigate('/');
        }
    }

    const getAnimeByName = async () => {
       const response = await fetch(`https://api.jikan.moe/v4/anime?q=${searchQuery}&sfw`)
       const data = await response.json();
       setAnime(data.data);
       
    }

    const onClickLogoHandle = () => {
        setAnime(popularAnime);
    }
  return (
    <nav>  
        <Link to='/'>
        <div className="logo" onClick={onClickLogoHandle}>
            Logo
        </div>
        </Link>
        <form onSubmit={onSubmitHandle}>
            <input type="text"
                    placeholder="Search Anime..."
                    value ={searchQuery}
                    onChange={onChangeHandle}
            />
            <button type='submit'>Search</button>
        </form>
    </nav>
    )
}

export default Navbar