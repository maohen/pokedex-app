import { ICardDetailed } from './ICardDetailed'
import { Icon } from '../../../../shared/components';
import styles from './CardDetailed.module.scss';

export const CardDetailed = (props:ICardDetailed) => {

    const {icon,title,value} = props;
    return (
        <div>
            <div className={styles.containerCard}>
                    <Icon source={icon}/>
                    <p>{value}</p>
            </div>
            <span>{title}</span>
        </div>
    )
}
