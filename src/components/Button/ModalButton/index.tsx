import { ReactElement, useContext } from "react";
import * as icons from 'phosphor-react'
import styles from './ModalButton.module.css'
import { User } from '../../Table/interface/index';
import { TableContext } from "../../../context/TableContext";

interface ModalRoundButtonProps {
    iconName?: string | ReactElement,
    onClick?: (user: User, isOpenModal: boolean) => void,
    user: User
}

export const ModalRoundButton = ({ iconName, onClick, user }: ModalRoundButtonProps) => {
    const { setCurrentUser, setIsOpenModalEditUser, state } = useContext(TableContext)
    const { isOpenModalEditUser } = state
    let PhosphorIcon: any = icons[iconName as keyof typeof icons]
    return (
        <div style={{ width: 27, height: 27 }} className={styles.containerButton} onClick={() => { setIsOpenModalEditUser(!isOpenModalEditUser); setCurrentUser(user) }}>
            <PhosphorIcon size='100%' weight='light' className={styles.propsIcon} />
        </div>

    )
}