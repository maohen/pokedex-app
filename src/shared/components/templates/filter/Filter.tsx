import { useEffect, useState } from "react";
import { Button, Spinner } from "../../ui";
import icons from "../../../assets/icons";
import styles from "./Filter.module.scss";
import { useLazyQuery } from "@apollo/client";
import { GET_TYPES } from "../../../api/getTypes";
import { Dispatch, RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";

export const Filter = () => {

  const [getTypes, { loading: loadingTypes, data: dataTypes }] = useLazyQuery(GET_TYPES);
  const { types } = useSelector((state: RootState) => state.pokemons);
  const dispatch = useDispatch<Dispatch>();
  const [isLoading, setIsLoading] = useState(false);
  const [valueSelected, setValueSelected] = useState<string>('');
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
    dispatch.pokemons.deleteFilter()
  };

  useEffect(() => {
    setIsLoading(loadingTypes);
    dataTypes && dispatch.pokemons.addTpes(dataTypes);
  }, [dataTypes, loadingTypes]);


  useEffect(() => {
    getTypes();
  }, []);

  return (
    <>
      <Button
        classname={styles.buttonFilter}
        action={handleIsOpen}
        icon={icons.Filter}
        iconClass={styles.iconFilter}
      />

      {isOpen && (
        <div className={styles.containerFilter}>
          {types.map((option, i) => (
            <label
              key={i}
              className={styles.radiolabel}
            >
              <input
                type="radio"
                name="color"
                value={option.name}
                checked={valueSelected === option.name}
                onChange={handleChange}
                className={styles.radioInput}
              />
              
              {option.name}
            </label>
          ))}
          <Button text="Borrar filtro" classname={styles.buttonFilter} action={deleteFilter} />
        </div>
      )}

    {isLoading && <Spinner />}
    </>
  );
};
