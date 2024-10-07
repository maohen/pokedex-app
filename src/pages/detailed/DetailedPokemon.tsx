import { ColorExtractor } from "react-color-extractor";
import styles from "./DetailedPokemon.module.scss";
import { BarNav } from "../../shared/components";
import { ContainerDetails } from "./components/container-detailed/ContainerDetails";
import { useDetailedPokemon } from "./useDetailedPokemon";

export const DetailedPokemon = () => {
  
  const {addFavoritePokemons,handleColors,navigate,colors,pokemon} = useDetailedPokemon();

  return (
    <div style={{ background: colors[1] }} className={styles.ContainerDetailed}>
      <ColorExtractor src={`${pokemon?.img}`} getColors={handleColors} />
      <BarNav
        action={() => navigate(-1)}
        info={`#${pokemon.id}`}
        text={pokemon.name}
      />
      <ContainerDetails
        color={colors}
        height={pokemon.height}
        weight={pokemon.weight}
        types={pokemon.type}
        addFavoritePokemons={addFavoritePokemons}
      />
      <img src={pokemon.img} alt="Imagen" className={styles.avatar}></img>
    </div>
  );
};
