import { IPokemon } from "../models/IPokemons"

export const convertPokemons = (pokemons: any):IPokemon[] => {
    const newPokemons:IPokemon[] = pokemons ? pokemons.pokemon_v2_pokemon.map((pokemon:any) => {
        return {
            id: pokemon.id,
            name: pokemon.name,
            img: pokemon.pokemon_v2_pokemonsprites[0].sprites.other.home.front_default,
            height: pokemon.height,
            weight: pokemon.weight,
            type: pokemon.pokemon_v2_pokemontypes_aggregate.nodes.map((p:any)=> p.pokemon_v2_type.name),
            color: "blue"
        }
    }) : []

    return newPokemons
}