import React from 'react'
import { InputTypeUsers } from './interface/index'
import styles from './InputTypeUser.module.css'

export const InputTypeUser = ({ size, type, eventHandler, text }: InputTypeUsers) => {
    return (
            <div className={`${styles.button} ${styles.b2} ${styles.button10}`} >
                <input type="checkbox" className={styles.checkbox} />
                <div className={styles.knobs}>
                    <span>Admin</span>
                </div>
                <div className={styles.layer}></div>
            </div>
            )
}
