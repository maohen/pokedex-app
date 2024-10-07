import icons from '../../../assets/icons'
import { Button } from '../button/Button'
import { IBarNav } from './IBarnav'
import styles from './Barnav.module.scss'
import { Title } from '../title/Title'

export const BarNav = (props: IBarNav) => {
  const { action, info, text} = props;
  return (
    <div className={styles.containerNav}>
      <div className={styles.mainNav}>
        <Button icon={icons.ArrowBack} action={action} classname={styles.buttonNav}/>
        <Title name={text} />
      </div>
      <span className={styles.infoNav}>{info}</span>
    </div>
  )
}
