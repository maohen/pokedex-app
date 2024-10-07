import { useNavigate } from 'react-router-dom';
import styles from './Card.module.scss';
import { ICard } from './ICard';

export const Card = (props:ICard) => {
  
  const navigate = useNavigate();

  const {
    name,
    img,
    id
  } = props;

  const handleNavigate = () =>{
    navigate(`/pokemon/${id}`)
  }

  return (
    <div className={styles.containerCard} onClick={handleNavigate}>
        <span className={styles.numberCard}>#{id}</span>
        <img src={img} alt="avatar" className={styles.avatar} loading='lazy'/>
        <p className={styles.textCard}>{name}</p>
    </div>
  )
}
