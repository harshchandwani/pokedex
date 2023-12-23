import  { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "./pokemonSlice";

const appStore = configureStore(
    {
        reducer: {
            pokemons: pokemonSlice,
        }
    }
);
export default appStore;