import { IRadioButton } from './IRadioButton'
import styles from './RadioButton.module.scss'

export const RadioButton = (props: IRadioButton) => {

    const { label, value, handleChange, valueSelected } = props;

  return (
    <div>
        <label
          key={value}
          className={styles.radiolabel}
        >
          <input
            type="radio"
            name="color"
            value={value}
            checked={valueSelected === value}
            onChange={handleChange}
            className={styles.radioInput}
          />
          
          {label}
        </label>
    </div>
  )
}
