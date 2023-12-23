import React, { useState } from 'react';
import usePokemonList from '../hooks/usePokemonList';
import DropdownMenu from './Dropdown';
import { useSelector } from 'react-redux';
import PokemonCard from "./PokemonCard";
import { Link } from 'react-router-dom';
const Browse = () => {
  const pokemonList = useSelector((store) => store.pokemons.pokemons);
  const { loadNextPage, loadPrevPage } = usePokemonList();
  const [searchQuery, setSearchQuery] = useState('');
  const filteredPokemonList = pokemonList
    ? pokemonList.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];
  return (
    <div className='mx-auto my-20 max-w-screen-lg'>
        <div className='flex items-center justify-between mx-10 my-4'>
        <form className='flex mb-4'>
        <input
            className='border-2 p-3 rounded-md min-w-[550px] text-md'
            placeholder='Search'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        
        <DropdownMenu />
        </form>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {filteredPokemonList.map((pokemon) => (
          <Link key={pokemon?.name} to={"/pokemon/" + pokemon?.name} pokemon={pokemon}>
            <div className="w-full">
              <PokemonCard props={pokemon} key={pokemon.name} />
            </div>
          </Link>
        ))}
      </div>


      <div className="flex justify-between mx-10 my-4">
        <button onClick={loadPrevPage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Prev
        </button>
        <button  onClick={loadNextPage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Next
        </button>
      </div>

    </div>
  );
}

export default Browse;
