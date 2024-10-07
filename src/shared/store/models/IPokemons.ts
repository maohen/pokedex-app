export interface IPokemonState {
    totalPokemons: IPokemon[]
    pokemons: IPokemon[];
    limit: number;
    favorites: IPokemon[];
    types: IType[]
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

 export type IType = {
    id: number;
    name: string;
  }