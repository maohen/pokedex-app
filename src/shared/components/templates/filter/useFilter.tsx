import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../../store/store";
import { useLazyQuery } from "@apollo/client";
import { GET_TYPES } from "../../../api/getTypes";

export const useFilter = () => {
  //Graphql hook that executes the request
  const [getTypes, { loading: loadingTypes, data: dataTypes }] =useLazyQuery(GET_TYPES);

  //state selector in store
  const { types } = useSelector((state: RootState) => state.pokemons);

  //action dispatchs in reducers
  const dispatch = useDispatch<Dispatch>();
  
  const [isLoading, setIsLoading] = useState(false);
  const [valueSelected, setValueSelected] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValueSelected(value);
    dispatch.pokemons.filerPokemons(value.toLocaleLowerCase());
  };

  const deleteFilter = () => {
    dispatch.pokemons.deleteFilter();
  };

  useEffect(() => {
    setIsLoading(loadingTypes);
    dataTypes && dispatch.pokemons.addTpes(dataTypes);
  }, [dataTypes, loadingTypes]);

  useEffect(() => {
    getTypes();
  }, []);

  return {
    types,
    isLoading,
    valueSelected,
    isOpen,
    handleIsOpen,
    handleChange,
    deleteFilter,
  };
};
