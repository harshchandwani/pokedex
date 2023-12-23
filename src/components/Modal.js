import React from 'react';
import { useParams } from 'react-router-dom';
import usePokemonInfo from '../hooks/usePokemonInfo';
import { useSelector } from 'react-redux';
import PokemonStatsChart from './PokemonStatsChart';

const Modal = () => {
  const { pokemonName } = useParams();
  usePokemonInfo(pokemonName);
  const pokemonInfo = useSelector((store) => store.pokemons.currentPokemon);
  const pokemonImage = useSelector((store) => store.pokemons.currentPokemonImage);

  if (!pokemonImage || !pokemonInfo) {
    return null; // Return null or any loading indicator when data is not ready
  }

  const { name, weight, base_experience, height, stats } = pokemonInfo;

  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div className='flex'>
      {/* Left Side */}
      <div className='w-1/2 p-8'>
        <img src={pokemonImage} alt={capitalizedName} className='w-full' />
      </div>

      {/* Right Side */}
      <div className='w-1/2 p-8'>
        <p className='text-4xl font-bold mb-4'>{capitalizedName}</p>
        <p>Weight: {weight}</p>
        <p>Base Experience: {base_experience}</p>
        <p>Height: {height}</p>
        <PokemonStatsChart stats={stats} />
      </div>
    </div>
  );
};

export default Modal;
