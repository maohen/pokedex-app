import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../shared/store/store";
import { useLazyQuery } from "@apollo/client";
import { debounceFunction } from "../../shared/helpers/debounceFunction";
import { GET_DATA } from "../../shared/api/getPokemons";

export const useHome = () => {
  const dispatch = useDispatch<Dispatch>();
  const { pokemons } = useSelector((state: RootState) => state.pokemons);
  const [isLoading, setIsLoading] = useState(false);

  const [getPokemons, { loading, data }] = useLazyQuery(GET_DATA);

  const handleScroll = (e: any) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;

      debounceFunction(() => {
        if (scrollHeight - Math.round(scrollTop) === clientHeight) {
          dispatch.pokemons.paginationPokemons()
        }
      });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const regex = /^[A-Za-z0-9]{3,}$/;
    if (regex.test(value)) {
      dispatch.pokemons.searchPokemons(value);
    }

    if (e.target.value.length === 0) {
      dispatch.pokemons.addPokemons(data);
    }
  };

  useEffect(() => {
    setIsLoading(loading);
    data && dispatch.pokemons.addPokemons(data);
  }, [data, loading]);

  useEffect(() => {
    getPokemons();
  }, []);

  return {
    pokemons,
    isLoading,
    handleScroll,
    handleSearch
  };
};
