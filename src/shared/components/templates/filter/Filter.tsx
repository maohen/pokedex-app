import { Button, Spinner } from "../../ui";
import icons from "../../../assets/icons";
import styles from "./Filter.module.scss";
import { useFilter } from "./useFilter";

export const Filter = () => {

  //useHook of the component executes the logic
  const {isOpen, types, valueSelected, isLoading, handleChange, handleIsOpen, deleteFilter} = useFilter()

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
