import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const PokeCard = ({pokeName}) =>  {
  const [pokemon, setPokemon] = useState({});

  useEffect(() =>{
  const pegaPokemon = pokeName => {
    console.log('oi', pokeName)
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then(response => 
      setPokemon(response.data ))
    .catch(err => {
      console.log(err);
    });
  };
pegaPokemon(pokeName)
},[pokeName])




  
  return (
    <div>
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    </div>
  );
}
export default PokeCard;
