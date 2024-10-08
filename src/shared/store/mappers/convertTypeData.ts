import { IType } from "../models/IPokemons"

export const convertTypesPokemons = (types: any):IType[] => {
    const newTypes:IType[] = types ? types.pokemon_v2_typename.map((type:any) => {
        return {
            id: type.id,
            name: type.name,
        }
    }) : []

    return newTypes
}