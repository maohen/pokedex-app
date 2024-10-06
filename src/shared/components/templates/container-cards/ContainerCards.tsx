import { Card } from '../';
import { IPokemon } from '../../../store/models/IPokemons';
import styles from './ContainerCards.module.scss';
import { IContainerCards } from './IContainerCards';

export const ContainerCards = (props: IContainerCards) => {
  const {pokemons, handleScroll} = props;
  return (
    <div className={styles.containerCards} onScroll={handleScroll}>
      {
        pokemons && pokemons.map((pokemon:IPokemon)=>
          <Card 
            key={pokemon.id}
            img={pokemon.img}
            id={pokemon.id}
            name={pokemon.name}
          />
      )
      }
    </div>
  )
}
