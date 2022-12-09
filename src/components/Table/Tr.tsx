import React, { ReactElement } from 'react'
import styles from './Table.module.css'
export const Tr = ({children}:{children:ReactElement|ReactElement[]}) => {
    return (
        <tr className={styles.contentTr}>{children}</tr>
    )
}