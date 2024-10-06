import { Models } from "@rematch/core";
import { pokemons } from "./states/pokemons";

export interface RootModel extends Models<RootModel> {
    pokemons: typeof pokemons;
}

export const models: RootModel = { pokemons };