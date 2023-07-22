import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Character = () => {
    
    const {id} = useParams();

    const getCharacterById = async () => {
        fetch(`https://api.jikan.moe/v4/characters/${id}`)
  .then((response) => response.json())
  .then((animelist) => console.log(animelist));

    }
    
    useEffect(() => {
        getCharacterById();
    })

    return (
    <div>
        {id}
    </div>
  )
}

export default Character