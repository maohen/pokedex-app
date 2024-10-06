import { IPokemon } from "../../../store/models/IPokemons";

export interface IContainerCards {
    pokemons: IPokemon[];
    handleScroll?: (e:any)=> void;
}