import React, { useState } from 'react';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom' 
import axios from 'axios'
import Progress_bar from './Progress_bar';

const PokemonDetail = () => {

    const {id} = useParams()
    const [character, setCharacter] = useState({})

   

    useEffect (() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => setCharacter(res.data))

    },[])

    console.log(character)

   
    return (
        <div>
           <div className='red-rectangle-pokemon'></div>
            <div className='black-rectangle-pokemon'></div>
        
            <img className='pokedex-img' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/905237/International_Pok%C3%A9mon_logo.svg.png" alt=''></img>
            <br />
            <div className='details-container'>
            <img src={character.sprites?.other.dream_world.front_default} alt='' />
            <h1> <hr/> {character.name}<hr/></h1> 
            
            <p className='weight-details'><b> {character.weight}<br/>Weight </b></p>
            <p className='height-details'><b> {character.height}<br/>Height </b></p>
            
            <h4 className='type-details'>Type </h4>
            <p className='type-details-data'>{character.types?.[0].type.name}</p>
            <h4 className='skills-details'>Habilidades</h4>
            <p className='skills-details-dataone'>{character.abilities?.[0].ability?.name}</p>
            <p className='skills-details-datatwoo'>{character.abilities?.[1].ability?.name}</p>
            <form className='form-conatainer-details' action="">
                
     <h3 className="heading">Stats</h3>
        
      <strong>HP</strong>
      <Progress_bar bgcolor="orange" progress={character.stats?.[0].base_stat}  height={30} />
      <strong>ATTACK</strong>
      <Progress_bar bgcolor="#BD5009" progress={character.stats?.[1].base_stat}  height={30} />
      <strong>DEFENSE</strong>
      <Progress_bar bgcolor="#165C9A" progress={character.stats?.[2].base_stat}  height={30} />
      <strong>SPEED</strong>
      <Progress_bar bgcolor="#99ccff" progress={character.stats?.[5].base_stat}  height={30} />
                 
            </form>

           
            </div>
        </div>
    );
};

export default PokemonDetail;