import icons from "../../../assets/icons";
import { Icon, Title, Input, Filter, Button } from "../..";
import styles from "./HeaderMain.module.scss";
import { IHeaderMain } from "./IHeaderMain";
import { Tooltip } from "react-tooltip";
import { useLocation, useNavigate } from "react-router-dom";
import { pathsRoutes } from "../../../enums/pathsRoutes";

export const HeaderMain = (props: IHeaderMain) => {
  const { handleSearch, filters } = props;
  const navigate = useNavigate();
  const location = useLocation();

  const validateLocation = location.pathname === pathsRoutes.favorites

  return (
    <div className={styles.HeaderMain}>
      <div className={styles.contentTitle}>
        <Icon source={icons.PokeballMain} className={styles.iconTitle} />
        <Title name="Pokedex" />
      </div>

      <div className={styles.containerMenu}>
        {
          filters && (
            <>
              <Input
                type="text"
                classname={styles.input}
                placeholder="Buscar"
                handleSearch={handleSearch}
              />
              <Filter />
              <Button
                classname={`${styles.buttonFilter} tooltip-favorites`}
                action={() => navigate("/favoritos")}
                icon={icons.Favorite}
                iconClass={styles.iconFavorites}
              />
            </>
          )
        }
        {
           validateLocation && 
            <Button
              classname={`${styles.buttonFilter} tooltip-home`}
              action={() => navigate("/")}
              icon={icons.Home}
              iconClass={styles.iconFavorites}
            />
        }

        <Tooltip anchorSelect={`${validateLocation ? '.tooltip-home' : '.tooltip-favorites'}`} place="bottom">
          { validateLocation ? 'Ir a Inicio' : 'Ir a favoritos'}
        </Tooltip>
      </div>
    </div>
  );
};
