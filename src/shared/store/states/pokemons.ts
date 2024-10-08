import { createModel } from "@rematch/core";
import { RootModel } from "../index";
import { IPokemonState } from "../models/IPokemons";
import { convertPokemons } from "../mappers/convertPokemonsData";
import { convertTypesPokemons } from "../mappers/convertTypeData";

export const pokemons = createModel<RootModel>()({
    state: {
      totalPokemons: [],
      pokemons: [],
      limit: 0,
      favorites: [],
      types: []
    } as IPokemonState, // typed complex state
    reducers: {
      // handle state changes with pure functions
      addPokemons(state, payload: any) {
        const dataPokemons = convertPokemons(payload);
        return {
          ...state,
          totalPokemons: dataPokemons,
          pokemons: dataPokemons.slice(0,100),
          limit: 100
        };
      },
      paginationPokemons(state) {
        return {
          ...state,
          pokemons: state.totalPokemons.slice(0, state.limit + 100),
          limit: state.limit + 100
        };
      },
      searchPokemons(state, payload: any) {
        const pokemons = state.totalPokemons.filter(pokemon=> pokemon.name.includes(payload));
        return {
          ...state,
          pokemons: pokemons
        };
      },
      addFavorites(state, payload: any){
        return {
          ...state,
          favorites: state.favorites.concat(payload)
        };
      },
      addTpes(state, payload: any){
        const dataTypes = convertTypesPokemons(payload);
        return {
          ...state,
          types: dataTypes
        };
      },
      filerPokemons(state, payload){
        const dataPokemons = state.totalPokemons.filter(pokemon=> pokemon.type.includes(payload));
        return{
          ...state,
          pokemons: dataPokemons
        }
      },
      deleteFilter(state) {
        return {
          ...state,
          pokemons: state.totalPokemons.slice(0,100),
        };
      },
    },
  });