import React, { ReactElement } from 'react'
import styles from './Table.module.css'
export const Tr = ({children, className}:{children:ReactElement|ReactElement[], className: string}) => {
    return (
        <tr className={className}>{children}</tr>
    )
}