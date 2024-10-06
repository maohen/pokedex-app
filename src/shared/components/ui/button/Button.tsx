import { Icon } from "../icon/Icon"
import { IButton } from "./IButton"
import styles from "./Button.module.scss";

export const Button = (props: IButton) => {

  const { action, classname, icon, text, iconClass } = props;
  return (
    <button onClick={action} className={`${styles.button} ${classname}`}> 
        { icon && <Icon source={icon} className={iconClass}/> }
        { text && <span>{text}</span> }
    </button>
  )
}
