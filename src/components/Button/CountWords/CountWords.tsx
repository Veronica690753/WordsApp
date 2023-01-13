import { MouseEventHandler } from "react"
import styles from './CountWords.module.css'


interface CounterWordsProps{
    number?:number,
    onClick?: MouseEventHandler 
}

const CounterWords = ({number, onClick}:CounterWordsProps) => {
    return (
        <button className={styles.button} onClick={onClick}>
            <div className={styles.containerButton}>
                <p>{number}</p>
                <p className={styles.textButton}>Words</p>
            </div>
        </button>
    )
}

export default CounterWords