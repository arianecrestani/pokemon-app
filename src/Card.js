import React, { useEffect, useState } from "react";
import "./styles.css";


// const colorPokemon = {
//   bulbasaur : 'green',
//   dunsparce:'red'
// }


const Card = ({ id }) => {
  const [pokemonDetail, setPokemonDetail] = useState();

  useEffect(() => {
    const getPokemon = async (id) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemonDetail(data);
    };
    getPokemon(id);
  }, [id]);

  return (
    <div className='card'>
      {pokemonDetail && (
        <div>
          <h1>{pokemonDetail.name}</h1>
          <h1>
            {pokemonDetail.height}f - {pokemonDetail.weight}kg
          </h1>
          <img src={pokemonDetail.sprites.front_default} alt="sprite" />
        </div>
      )}
    </div>
  );
};

export default Card;