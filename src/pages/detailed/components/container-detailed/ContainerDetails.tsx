import icons from "../../../../shared/assets/icons";
import { IContainerDetails } from "./IContainerDetails";
import { CardDetailed } from "../card-detailed/CardDetailed";
import { Button } from "../../../../shared/components";
import { Tooltip } from "react-tooltip";
import styles from "./ContainerDetails.module.scss";

export const ContainerDetails = (props: IContainerDetails) => {
  const { color, height, types, weight, addFavoritePokemons } = props;

  return (
    <div className={styles.contentDetailed}>
      <div className={styles.detailedAbilities}>
        {types.map((type: string, index: number) => (
          <span
            key={index}
            style={{ background: color[index] }}
            className={styles.spanAbility}
          >
            {" "}
            {type}{" "}
          </span>
        ))}
      </div>

      <Button
        icon={icons.Favorite}
        action={addFavoritePokemons}
        classname={`${styles.btnFavotites} tooltip-favorites`}
        iconClass={styles.imgFavotites}
      />
      

        <Tooltip anchorSelect={'.tooltip-favorites'} place="right">
        agregar a favoritos
        </Tooltip>

      <p className={`${styles.textAbout}`} style={{ color: color[0] }}>
        About
      </p>

      <div className={styles.detailedChars}>
        <CardDetailed
          icon={icons.Straighten}
          title="Height"
          value={`${height} m`}
        />
        <CardDetailed
          icon={icons.Weight}
          title="weight"
          value={`${weight} kg`}
        />
      </div>
    </div>
  );
};
