import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const PokemonCard = ({url}) => {

    const [characterPoke, setCharacterPoke] = useState({})
    const navigate = useNavigate();

    useEffect(()=> {
        axios.get(url)
        .then(res => setCharacterPoke(res.data))

    },[])

    console.log(characterPoke)
    return (
      
        
       
        <div  className='poke-card' onClick={()=> navigate(`/pokemon/${characterPoke.id}`)}>
             <img src='src\assets\img\pokeball.svg' alt='' />
            <h3>{characterPoke.name}</h3>
            <img src={characterPoke.sprites?.front_default} alt='' />
            <p><b> {characterPoke.weight}<br/>Weight </b></p>
            <p><b> {characterPoke.height}<br/>Height </b></p>
            <p><b>Type:{characterPoke.types?.[0].type.name}</b></p>
        </div>
    
      
    );
};

export default PokemonCard;