import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
    name: "pokemons",
    initialState: {
        pokemons: null,
    },
    reducers: {
        addPokemons: (state, action) => {
            state.pokemons = action.payload;
        }
    }
})

export const {addPokemons} = pokemonSlice.actions;
export default pokemonSlice.reducer;