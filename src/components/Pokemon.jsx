import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import PokemonCard from './PokemonCard';
import { useNavigate } from 'react-router-dom'

const Pokemon = () => {

    const name = useSelector(state => state.userName)

    const [pokemon, setPokemon] = useState([])
    const [nameInput, setNameInput] = useState("")
    const [typeList, setTypeList] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(res => setPokemon(res.data.results))

         axios.get('https://pokeapi.co/api/v2/type/')
            .then(res => setTypeList(res.data.results))
         
    }, [])

    console.log(pokemon)

    const searchName = () => {
        navigate(`/pokemon/${nameInput}`)
    }

    const searchType = (typeUrl) =>{
        axios.get(typeUrl)
        .then(res =>setPokemon(res.data.pokemon))
    }

    const [page, setPage]= useState(1)
    const pokemonPerPage = 5
    const lastIndex = page * pokemonPerPage;
    const firstIndex = pokemonPerPage - lastIndex;
    const pokemonPaginated = pokemon.slice(
        firstIndex, lastIndex)
    
    const totalPage = Math.ceil(pokemon.length / pokemonPerPage)
    const  pageNumbers = [];
    for (let i =1; i <= totalPage; i++){
        pageNumbers.push(i)
    }
    return (
        <div  >
            <div className='red-rectangle-pokemon'></div>
            <div className='black-rectangle-pokemon'></div>
            <img className='pokedex-img' src='src\assets\img\image 11.jpg' alt=''></img>
             <p>Welcome {name}</p>
             <div >
            <button className='pag-container-prev' onClick={() => setPage(page-1)}
            disabled={page === 1}
            >Prev page</button>
            <button className='pag-container-next'  onClick={() => setPage(page+1)}
            disabled={page === totalPage}
            >Next page</button>
            </div>
            <div>

                <input className='input-pokedex' type="text" 
                placeholder='Search by Name' 
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}/>
                <button className='btn-search-pokedex' onClick={searchName}>Search</button>
                 <div className='numpag-container'>

                {
                    pageNumbers.map(number =>(
                        
                        <button  onClick={() => setPage(number)} >{number}</button>
                        
                        ))
                    }
                    </div>
                </div>
                <div >
                    <select className='select-container' onChange={e => searchType (e.target.value)}>
                        <option value="">Select Type</option>
                        {typeList.map(poketype => (
                            <option value={poketype.url} key={poketype.id}>
                                {poketype.name}</option>
                        ))
                        
                        }   
                    </select>    
                </div>    
                <div className='pokecard-container'>            
                {
                pokemonPaginated.map(poke => (
                    <PokemonCard url={poke.url ? poke.url : poke.pokemon.url} 
                    key={poke.url ? poke.url : poke.pokemon.url} />
                    ))
                }
                </div>
        </div>
    );
};

export default Pokemon;