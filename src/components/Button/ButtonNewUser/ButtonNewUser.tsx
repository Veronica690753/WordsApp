import styles from './ButtonNewUser.module.css'
import { ButtonNewUser } from './interface'

const ButtonIconNewUser = ({backgroundColor,size, text,onClick}:ButtonNewUser) => {
    return (
        <button className={`${styles[size]} ${styles.button}`} style={{backgroundColor:backgroundColor}} onClick={onClick}>
            <div className={styles.containerButton}>
                <div>
                </div>
                <p className={styles.textButton}>{text}</p>
            </div>
        </button>
    )
}

export default ButtonNewUser

ButtonIconNewUser.defaultProps={
    size:'md'
}