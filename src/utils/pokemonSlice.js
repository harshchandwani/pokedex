import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
    name: "pokemons",
    initialState: {
        pokemons: null,
        next: "https://pokeapi.co/api/v2/pokemon",
        prev: null,
        currentPokemon: null,
        currentPokemonImage: null,
    },
    reducers: {
        addPokemons: (state, action) => {
            state.pokemons = action.payload;
        },
        updateNext: (state, action) => {
            state.next = action.payload;
        },
        updatePrev: (state, action) => {
            state.prev = action.payload;
        },
        addCurrentPokemon: (state, action) => {
            state.currentPokemon = action.payload;
        },
        addCurrentPokemonImage: (state, action) => {
            state.currentPokemonImage = action.payload;
        }

    }
})

export const { addPokemons, updateNext, updatePrev, addCurrentPokemon, addCurrentPokemonImage} = pokemonSlice.actions;
export default pokemonSlice.reducer;