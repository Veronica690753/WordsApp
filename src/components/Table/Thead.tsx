import React, { ReactElement } from 'react'
import styles from './Table.module.css'

const Thead = ({children}:{children:ReactElement|ReactElement[]}) => {
    return (
        <thead className={styles.containerTHead}>{children}</thead>
    )
}

export default Thead