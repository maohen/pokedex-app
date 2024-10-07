import { gql } from '@apollo/client';

export const GET_DATA_BY_TYPE = gql`
  query GetPokemonsByType($type: String!) {
    pokemon_v2_type(where: {name: {_eq: $type}}) {
      pokemon_v2_pokemontypes {
            pokemon_v2_pokemon {
                id
                name
                height
                weight
                pokemon_v2_pokemontypes_aggregate {
                    nodes {
                        pokemon_v2_type {
                            name
                        }
                    }
                }
                pokemon_v2_pokemonsprites {
                    sprites
                }
            }
        
        }
    }
  }
`;