import React, { createContext, useContext, useEffect, useReducer } from"react";

const GlobalContext = createContext();

const baseUrl = "https://api.jikan.moe/v4";

const GET_POPULAR_ANIME = "GET_POPULAR_ANIME";
const GET_AIRING_ANIME = "GET_AIRING_ANIME";
const GET_UPCOMING_ANIME = "GET_UPCOMING_ANIME";
const LOADING = "LOADING";
const SEARCH = "SEARCH";

const reducer = (state,action) => {
    switch(action.type){
        case LOADING:
            return {...state,loading:true};
        case GET_POPULAR_ANIME:
            return {...state,popularAnime:action.payload,loading:false};
        case SEARCH:
            return {...state,isSearch:action.payload,loading:false};
        default:
            return state;
    }
}

export const GlobalContextProvider = ({children}) => {

    const initialState = {
        popularAnime: [],
        upcomingAnime: [],
        airingAnime: [],
        pictures: [],
        isSearch: false,
        searchResults: [],
        loading: false,
    }

    const [state,dispatch] = useReducer(reducer,initialState);

    const setIsSearch = (boolean) =>{
        dispatch({type:SEARCH,payload:boolean});
    }

    const popularAnime = async () =>{
        dispatch({type:LOADING});
        const response = await fetch(`${baseUrl}/top/anime?filter=bypopularity`);
        const data = await response.json();
        console.log(data.data);
        dispatch({type:GET_POPULAR_ANIME,payload: data.data})
    }

    

    useEffect( () =>{
        popularAnime();
    },[])
    return(
        <GlobalContext.Provider value={{...state,setIsSearch}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}



