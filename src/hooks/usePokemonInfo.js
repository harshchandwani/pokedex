import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCurrentPokemon, addCurrentPokemonImage } from '../utils/pokemonSlice';
const usePokemonInfo = (pokemonName) => {
    // const { pokemonName } = props;
    const dispatch = useDispatch();
    const getPokemonInfo = async () => {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName);
        const json = await data.json();
        const urlWithId = json.forms[0].url;
        const pattern = /\/(\d+)\/$/;
        const match = urlWithId.match(pattern);
        const extractedNumber = match[1];
        const imageLink = "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/"
        const imageUrl = `${imageLink}${extractedNumber}.svg`;
        dispatch(addCurrentPokemonImage(imageUrl));
        dispatch(addCurrentPokemon(json));
    }
    useEffect(() => {
        getPokemonInfo(); // Load the initial page when the component mounts
      }, []);
}

export default usePokemonInfo;