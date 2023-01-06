import { TableContext } from './TableContext'
import { TableReducer } from './TableReducer'
import { useReducer, useMemo } from 'react';
import { User } from '../components/Table/interface';

interface TableProps {
    children: JSX.Element | JSX.Element[]
}

export interface TableContextState {
    isOpenModalEditUser: boolean,
    deleteUser?: User,
    currentUser?: User
}

const INITIAL_STATE: TableContextState = {
    isOpenModalEditUser: false,
    deleteUser: undefined,
    currentUser: undefined
}

export const TableContextProvider = ({ children }: TableProps) => {

    const [state, dispatch] = useReducer(TableReducer, INITIAL_STATE)

    const setCurrentUser = (currentUser?: User) => {
        currentUser && dispatch({
            type: 'setCurrentUser',
            payload: {
                currentUser
            }
        })
    }

    const setIsOpenModalEditUser = (isOpenModalEditUser: boolean) => {
        dispatch({
            type: 'setIsOpenModalEditUser',
            payload: {
                isOpenModalEditUser
            }
        })
    }

    const setDeleteUser = (deleteUser?: User) => {
        deleteUser && dispatch({
            type: 'setDeleteUser',
            payload: {
                deleteUser
            }
        })
    }

    return (
        <TableContext.Provider value={{ state, setCurrentUser, setDeleteUser, setIsOpenModalEditUser }}>
            {children}
        </TableContext.Provider>
    )
}