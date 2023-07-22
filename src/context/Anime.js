import React,{ createContext, useContext } from "react";

const AnimeContext = createContext();

export const AnimeContextProvider = ({children}) => {
    const[anime,setAnime] = React.useState([]);
    return(
        <AnimeContext.Provider value={{anime,setAnime}}>
            {children}
        </AnimeContext.Provider>
    )
}
export const useAnimeContext = () => {
    return useContext(AnimeContext);
}