import { useDispatch, useSelector} from "react-redux";
import { addPokemons, updateNext, updatePrev } from "../utils/pokemonSlice";
import { useEffect } from "react";

const usePokemonList = () => {
    const nextUrl = useSelector((store) => store.pokemons.next);
    const prevUrl = useSelector((store) => store.pokemons.prev);
    const dispatch = useDispatch();
    const getPokemonList = async (url) => {
        const data = await fetch(url);
        const json = await data.json();
        dispatch(addPokemons(json.results));
        dispatch(updateNext(json.next));
        dispatch(updatePrev(json.previous));
    };
    const loadNextPage = () => {
        if (nextUrl) {
          getPokemonList(nextUrl);
        }
      };
    
      const loadPrevPage = () => {
        if (prevUrl) {
          getPokemonList(prevUrl);
        }
      };
    
      useEffect(() => {
        getPokemonList(nextUrl); // Load the initial page when the component mounts
      }, []);

    return { loadNextPage, loadPrevPage };
}

export default usePokemonList;