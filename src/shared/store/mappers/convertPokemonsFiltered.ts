import { IPokemon } from "../models/IPokemons"

export const convertPokemonsFiltered = (data: any):IPokemon[] => {
    const pokemons = data?.pokemon_v2_type[0]?.pokemon_v2_pokemontypes;
    console.log(pokemons)
    const newPokemons:IPokemon[] = pokemons ? pokemons.map((pokemon:any) => {
        const poke = pokemon.pokemon_v2_pokemon;
        return {
            id: poke.id,
            name: poke.name,
            img: poke.pokemon_v2_pokemonsprites[0].sprites.other.home.front_default,
            height: poke.height,
            weight: poke.weight,
            type: poke.pokemon_v2_pokemontypes_aggregate.nodes.map((p:any)=> p.pokemon_v2_type.name),
            color: "blue"
        }
    }) : []
    console.log(newPokemons)
    return newPokemons
}