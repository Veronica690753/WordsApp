import styles from './BassicButton.module.css'
import { BasicButtonProps } from './interface'

const BasicBtn = ({ backgroundColor, size, text, colorText, onClick, borderColor, fontWeight, type }: BasicButtonProps) => {
    return (
        <button className={`${styles[size]} ${styles.button}`} style={{ backgroundColor: backgroundColor, color: colorText, borderColor: borderColor }} onClick={onClick} type={type}>
            <div className={styles.containerButton}>
                <p className={styles.textButton} style={{ fontWeight: fontWeight }}>{text}</p>
            </div>
        </button>
    )
}

export default BasicBtn

BasicBtn.defaultProps = {
    size: 'md'
}