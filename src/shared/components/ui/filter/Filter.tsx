import { useState } from "react";
import { Button } from "../";
import icons from "../../../assets/icons";
import styles from "./Filter.module.scss";

export const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Button
        classname={styles.buttonFilter}
        action={handleIsOpen}
        icon={icons.Filter}
        iconClass={styles.iconFilter}
      />

      {isOpen && <span>filtro</span>}
    </>
  );
};
