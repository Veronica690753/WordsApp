import { MouseEvent, MouseEventHandler, ReactElement, useContext, useEffect, useState } from "react";
import * as icons from 'phosphor-react'
import styles from './ModalButton.module.css'
import { User } from '../../Table/interface/index';
import { TableContext } from "../../../pages/UsersPage";

interface ModalRoundButtonProps {
    iconName?: string | ReactElement,
    onClick?: (user: User, isOpenModalEditUser: boolean) => void,
    user: User
}

export const ModalRoundButton = ({ iconName, onClick, user }: ModalRoundButtonProps) => {

    const { isOpenModalEditUser, setIsOpenModalEditUser, setCurrentUser } = useContext(TableContext)
    let PhosphorIcon: any = icons[iconName as keyof typeof icons]

    return (

        <div style={{ width: 32, height: 32 }} className={styles.containerButton} onClick={() => { setIsOpenModalEditUser(!isOpenModalEditUser); setCurrentUser(_prev => user) }}>

            <PhosphorIcon size='100%' weight='bold' className={styles.propsIcon} />

        </div>

    )
}