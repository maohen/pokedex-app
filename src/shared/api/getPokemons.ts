import { gql } from '@apollo/client';

export const GET_DATA = gql`
    query GetData($limit: Int, $where: pokemon_v2_pokemon_bool_exp) {
        pokemon_v2_pokemon(order_by: {name: asc}, limit: $limit, where: $where) {
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
`;