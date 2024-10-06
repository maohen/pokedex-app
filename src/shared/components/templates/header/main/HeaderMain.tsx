import icons from "../../../../assets/icons";
import { Icon, Title, Input, Filter, Button } from "../../../../components";
import styles from './HeaderMain.module.scss';

const HeaderMain = () => {


  

  return (
    <div className={styles.HeaderMain}>
      <div className={styles.contentTitle}>
        <Icon source={icons.PokeballMain} className={styles.iconTitle}/>
        <Title name='Pokedex'/>
      </div>

        <div className={styles.containerMenu}>
            <Input type="text" classname={styles.input} placeholder="Buscar"/>
            <Filter/>
            <Button
              classname={styles.buttonFilter}
              action={()=>{}}
              icon={icons.Favorite}
              iconClass={styles.iconFavorites}
            />
        </div>
    </div>
  )
}

export default HeaderMain