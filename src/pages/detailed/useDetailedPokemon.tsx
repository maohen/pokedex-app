import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from '../../shared/store/store';
import { IPokemon } from '../../shared/store/models/IPokemons';
import { useNavigate, useParams } from 'react-router-dom';

export const useDetailedPokemon = () => {
    const dispatch = useDispatch<Dispatch>();

    const { pokemons } = useSelector((state: RootState) => state.pokemons);
    const [pokemon, setPokemon] = useState<IPokemon>({
        id: 0,
        name: "",
        img: "",
        height: "",
        weight: "",
        type: [],
        color: "",
    });
    const [colors, setColors] = useState<string[]>([]);

    const { id } = useParams();
    const navigate = useNavigate();

    const handleColors = (extractedColors: string[]) => {
        setColors(extractedColors);
    };

    const addFavoritePokemons = () => {
        dispatch.pokemons.addFavorites(pokemon);
    };


    useEffect(() => {
        const data = pokemons.find((pok: IPokemon) => pok.id === Number(id));

        data ? setPokemon(data) : navigate("/");
    }, [pokemons]);
    
  return {
    colors,
    pokemon,
    navigate,
    handleColors,
    addFavoritePokemons
  }
}
