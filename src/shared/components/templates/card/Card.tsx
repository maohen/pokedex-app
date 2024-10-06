import styles from './Card.module.scss';
import { ICard } from './ICard';

export const Card = (props:ICard) => {

  const {
    name,
    img,
    id
  } = props;

  return (
    <div className={styles.containerCard}>
        <span className={styles.numberCard}>#{id}</span>
        <img src={img} alt="avatar" className={styles.avatar} loading='lazy'/>
        <p className={styles.textCard}>{name}</p>
    </div>
  )
}
