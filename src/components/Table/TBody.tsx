import React, { ReactElement } from 'react'
import styles from './Table.module.css'

const Tbody = ({children}:{children:ReactElement|ReactElement[]}) => {
    return (
        <tbody >{children}</tbody>
    )
}

export default Tbody