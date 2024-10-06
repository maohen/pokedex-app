import { createModel } from "@rematch/core";
import { RootModel } from "../index";
import { IPokemonState, IPokemon } from "../models/IPokemons";
import { convertPokemons } from "../mappers/convertGlossasDocument";
import { useQuery } from "@apollo/client";
import { GET_DATA } from "../../api/getPokemons";

export const pokemons = createModel<RootModel>()({
    state: {
      pokemons: [],
      limit: 0
    } as IPokemonState, // typed complex state
    reducers: {
      // handle state changes with pure functions
      addPokemons(state, payload: any) {
        console.log("first")
        const dataPokemons = convertPokemons(payload);
        return {
          ...state,
          pokemons: dataPokemons,
          limit: state.limit + 100
        };
      },
    },
  });