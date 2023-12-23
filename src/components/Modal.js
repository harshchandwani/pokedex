import React from 'react'
import { useParams } from 'react-router-dom'
import usePokemonInfo from '../hooks/usePokemonInfo';
import { useSelector } from 'react-redux';

const Modal = () => {
  const { pokemonName } = useParams();
  usePokemonInfo(pokemonName);
  const pokemonInfo = useSelector((store) => store.pokemons.currentPokemon);
  const pokemonImage = useSelector((store) => store.pokemons.currentPokemonImage);
  if(!pokemonImage || !pokemonInfo){
    return;
  }
  const {name, weight, base_experience, height, stats} = pokemonInfo;

  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <div className='flex'>
      <img src={pokemonImage} />
      <div>
        <p>{capitalizedName}</p>
        <p>Weight: {weight}</p>
        <p>Base Experience: {base_experience}</p>
        <p>Height: {height}</p>

        <ul>
        {stats.map((stat, index) => (
          <li key={index}>
            <strong>{stat.stat.name}:</strong> {stat.base_stat}
          </li>
        ))}
      </ul>
      </div>
    </div>
  )
}

export default Modal