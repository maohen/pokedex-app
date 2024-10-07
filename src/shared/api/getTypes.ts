import { gql } from '@apollo/client';

export const GET_TYPES = gql`
query GetTypes {
    pokemon_v2_typename(distinct_on: name, where: {language_id: {_eq: 9}}) {
        id
        name
    }
}`;