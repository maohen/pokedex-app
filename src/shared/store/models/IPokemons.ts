export interface IPokemonState {
    pokemons: IPokemon[];
    limit: number;
  }

 export type IPokemon = {
    id: number;
    name: string;
    img: string;
    height: string;
    weight: string;
    type: string[];
    color?: string;
  }